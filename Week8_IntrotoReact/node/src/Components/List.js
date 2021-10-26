const List = ({experience}) => {
    return (

        <>
        {experience. map( (list) => (
        <div key={list.id} className='section'>
            <h2>{list.name}</h2>
            <h3>{list.duration}</h3>
            <p>{list.description1}</p>
            <p>{list.description2}</p>
            <p>{list.description3}</p>
        </div>
        ) )}
        </>





        // <div>
        //     <h2>List</h2>
        //     <h3>{people[0].name} - {people[0].program}</h3>
        //     <h3>{people[1].name} - {people[0].program}</h3>
        //     <h3>{people[2].name} - {people[0].program}</h3>
        // </div>

    )
}

export default List
