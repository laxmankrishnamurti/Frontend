function Profile({ type, value, changeInputState, stateOptions, selectLabel }) {
    return (
        <>
            <div className="mt-4 mx-auto w-1/2">
                <input
                    className="border-pink-500 border-2 p-2 rounded-md"
                    type={type}
                    value={value}
                    onChange={(e) => changeInputState(e.target.value)}
                />
                <p>Input type is {type}</p>
                <p>Username is : {value}</p>

                {/* <div className="mt-4">
                    <label htmlFor="selectState" className="block">{selectLabel}</label>
                    <select id="selectState" className="w-4/6 p-2 text-black bg-slate-500">
                        {stateOptions.map((state) => <option key={state}>{state}</option>)}
                    </select>
                </div> */}
            </div>
        </>
    )
}

export default Profile