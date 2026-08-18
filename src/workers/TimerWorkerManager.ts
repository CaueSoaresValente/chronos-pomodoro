import type { TaskStateModel } from "../models/TaskStateModel";
import TimerWorker from "./timerWorker.js?worker";

export class TimerWorkerManager {
    private static instance: TimerWorkerManager | null = null;
    private worker: Worker | null = null;
    private fallbackIntervalId: number | null = null;
    private onMessageCallback: ((event: MessageEvent) => void) | null = null;
    private currentTargetEnd: number | null = null;
    private currentTaskId: string | null = null;

    private constructor() {
        this.initWorker();
    }

    private initWorker() {
        try {
            this.worker = new TimerWorker();
            if (this.onMessageCallback) {
                this.worker.onmessage = this.onMessageCallback;
            }
        } catch (error) {
            console.warn("Web Worker não pôde ser inicializado. Usando fallback de timer:", error);
            this.worker = null;
        }
    }

    static getInstance(): TimerWorkerManager {
        if (!TimerWorkerManager.instance) {
            TimerWorkerManager.instance = new TimerWorkerManager();
        }
        return TimerWorkerManager.instance;
    }

    postMessage(message: TaskStateModel) {
        if (this.worker) {
            try {
                this.worker.postMessage(message);
                return;
            } catch (err) {
                console.warn("Erro ao enviar mensagem para Web Worker. Usando fallback:", err);
                this.worker = null;
            }
        }

        this.runFallbackTimer(message);
    }

    private runFallbackTimer(message: TaskStateModel) {
        const { activeTask, secondsRemaining } = message;

        if (!activeTask) {
            if (this.fallbackIntervalId !== null) {
                clearInterval(this.fallbackIntervalId);
                this.fallbackIntervalId = null;
            }
            this.currentTaskId = null;
            this.currentTargetEnd = null;
            return;
        }

        if (this.currentTaskId === activeTask.id && this.fallbackIntervalId !== null) {
            return;
        }

        if (this.fallbackIntervalId !== null) {
            clearInterval(this.fallbackIntervalId);
        }

        this.currentTaskId = activeTask.id;
        this.currentTargetEnd = Date.now() + secondsRemaining * 1000;

        this.fallbackIntervalId = window.setInterval(() => {
            if (!this.currentTargetEnd) return;
            const countDownSeconds = Math.max(0, Math.ceil((this.currentTargetEnd - Date.now()) / 1000));

            if (this.onMessageCallback) {
                this.onMessageCallback({ data: countDownSeconds } as MessageEvent);
            }

            if (countDownSeconds <= 0) {
                if (this.fallbackIntervalId !== null) {
                    clearInterval(this.fallbackIntervalId);
                    this.fallbackIntervalId = null;
                }
                this.currentTaskId = null;
                this.currentTargetEnd = null;
            }
        }, 1000);
    }

    onMessage(callback: (event: MessageEvent) => void) {
        this.onMessageCallback = callback;
        if (this.worker) {
            this.worker.onmessage = callback;
        }
    }

    terminate() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
        if (this.fallbackIntervalId !== null) {
            clearInterval(this.fallbackIntervalId);
            this.fallbackIntervalId = null;
        }
        TimerWorkerManager.instance = null;
    }
}