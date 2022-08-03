interface IErrors {
    errors?: any
}

const ValidationErrors = ({ errors = [] } : IErrors) => {
    return Object.keys(errors).length > 0 ?
        <div className="mb-4">
            <div className="font-medium text-red-600">Ooops! Algo deu errado.</div>

            <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                {Object.keys(errors).map(function (key, index) {
                    return <li key={index}>{errors[index]}</li>;
                })}
            </ul>
        </div> : null;
}

export default ValidationErrors;