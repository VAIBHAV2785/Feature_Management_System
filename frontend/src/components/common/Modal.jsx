export default function Modal({ isOpen, onClose, title, children }) {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-[600px] p-8">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl"
                    >
                        ✖
                    </button>

                </div>

                {children}

            </div>

        </div>

    );

}