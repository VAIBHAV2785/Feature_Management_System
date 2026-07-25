export default function Input({

    label,

    ...props

}) {

    return (

        <div className="mb-4">

            <label className="block mb-2 font-semibold">

                {label}

            </label>

            <input
                {...props}
                className="w-full border rounded-lg p-3 outline-blue-500"
            />

        </div>

    );

}   