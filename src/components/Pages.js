import React from 'react'

function Pages({ gotoNextPage, gotoPreviousPage }) {
    return (
        <div>
            {gotoPreviousPage && <button onClick={gotoPreviousPage}>Précédent</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Suivant</button>}
        </div>
    )
}

export default Pages
