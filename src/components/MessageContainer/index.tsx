import { Bounce, ToastContainer } from "react-toastify";

export function MessagesConatiner() {

    return (
        <ToastContainer
            position="top-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    )

}