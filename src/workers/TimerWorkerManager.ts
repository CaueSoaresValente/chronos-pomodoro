import type { TaskStateModel } from "../models/TaskStateModel";

export class TimerWorkerManager {
    private static instance: TimerWorkerManager | null = null;
    private worker: Worker | null = null;
    private onMessageCallback: ((event: MessageEvent) => void) | null = null;

    private constructor() {
        this.initWorker();
    }

    private initWorker() {
        try {
            this.worker = new Worker(new URL('./timerWorker.js', import.meta.url), { type: 'module' });
            if (this.onMessageCallback) {
                this.worker.onmessage = this.onMessageCallback;
            }
        } catch (error) {
            console.error("Erro ao inicializar o Web Worker do timer:", error);
        }
    }

    static getInstance(): TimerWorkerManager {
        if (!TimerWorkerManager.instance) {
            TimerWorkerManager.instance = new TimerWorkerManager();
        }
        return TimerWorkerManager.instance;
    }

    postMessage(message: TaskStateModel) {
        if (!this.worker) {
            this.initWorker();
        }
        this.worker?.postMessage(message);
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
        TimerWorkerManager.instance = null;
    }
}