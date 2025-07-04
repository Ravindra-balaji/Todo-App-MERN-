// import { useState } from "react";


// const App=()=>
// {

//   const [users,setusers]=useState([]);

//   const handlesubmit=(e)=>
//   {

//     e.preventDefault();
//     console.log(e.target[0].value,e.target.username.value);
//     console.log(e.target[1].value,e.target.city.value);
//     const name=e.target.username.value;
//     const city=e.target.city.value;
//     setusers([{name, city}])
//     console.log(users);

//   }
//   return(
//     <div>
//       <form onSubmit={handlesubmit}>
//       <label>Enter Name</label>
//       <input type="text" name="username"/>
//       <br></br>
//       <label>Enter City</label>
//       <input type="text" name="city"/>
//       <br></br>
//       <button>Add Details</button>
//     </form>
//     <div>
//       {users.map((elem)=>{
//         return (
//           <div>
//             <h2>{elem.name}</h2>
//             <h2>{elem.city}</h2>
//             </div>
//         )
//       })}
//     </div>
//     </div>
  
//   )

// }
import { useState } from "react";

const App = () => {
    const [editIndex, setEditIndex] = useState(-1);
    const [fruits, setFruits] = useState([
        { name: "Mango", color: "yellow", price: 600 },
        { name: "Apple", color: "red", price: 200 },
        { name: "orange", color: "orange", price: 150 },
        { name: "Banana", color: "yellow", price: 40 },
    ]);

    const [editedFruit, setEditedFruit] = useState({
        name: "",
        color: "",
        price: "",
    });

    const handleEdit = (idx) => {
        setEditIndex(idx);
        setEditedFruit(fruits[idx]);
    };

    const handleSave = () => {
        const updatedFruits = [...fruits];
        updatedFruits[editIndex] = editedFruit;
        setFruits(updatedFruits);
        setEditIndex(-1);
    };

    const handleCancel = () => {
        setEditIndex(-1);
    };

    return (
        <div
            style={{

                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh", // Full screen height
                backgroundColor: "#f0f0f0",
            }}
        >
            <div>
                {fruits.map((elem, idx) => {
                    if (editIndex === idx) {
                        return (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: elem.color,
                                    
                                    textAlign: "center",
                                }}
                            >
                                <input
                                    type="text"
                                    value={editedFruit.name}
                                    onChange={(e) =>
                                        setEditedFruit({
                                            ...editedFruit,
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder="Fruit Name"
                                />
                                <br />
                                <input
                                    type="text"
                                    value={editedFruit.color}
                                    onChange={(e) =>
                                        setEditedFruit({
                                            ...editedFruit,
                                            color: e.target.value,
                                        })
                                    }
                                    placeholder="Color"
                                />
                                <br />
                                <input
                                    type="number"
                                    value={editedFruit.price}
                                    onChange={(e) =>
                                        setEditedFruit({
                                            ...editedFruit,
                                            price: Number(e.target.value),
                                        })
                                    }
                                    placeholder="Price"
                                />
                                <br />
                                <button onClick={handleSave}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: elem.color,
                                    padding: "20px",
                                    margin: "10px",
                                    borderRadius: "10px",
                                    minWidth: "250px",
                                    textAlign: "center",
                                }}
                            >
                                <h3>{elem.name}</h3>
                                <h4>Color: {elem.color}</h4>
                                <h4>Price: Rs. {elem.price}</h4>
                                <button onClick={() => handleEdit(idx)}>Edit</button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default App;