import Guitar from "./guitar"

function GuitarList({guitars}) {

    return (
        <>
            <h2 className="heading">Nuestras Pinturas</h2>
            {guitars.length && (
                <div className="guitarras-grid">
                {guitars.map(guitar => (
                    <Guitar 
                        key={guitar.id}
                        guitar={guitar.attributes}
                    />
                ))}
                </div>
            )}          
        </>
    )
}

export default GuitarList