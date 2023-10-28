const [user_2, setUser] = useState("JOEL MARTINEZ")
  function changeName() {
    const newName = document.getElementById("InputName").value;
    setUser(newName)
    document.getElementById("InputName").value ="";
  }

  const usersWithGrades = [
    {
      name: 'pepe',
      grade: 10
    },
    {
      name: 'pablo',
      grade: 9
    },
    {
      name: 'ernesto',
      grade: 9.5
    },
    {
      name: 'noe',
      grade: 10
    },
    {
      name: 'ana',
      grade: 8
    }
  ]
return (
  <div className="App">
  <header className="App-header">
    HELLO, {user_2}!!
    <input id="InputName" type="text" placeholder='Change your name'></input>
    <button onClick={changeName}>Change</button>
    <img src={logo} className="App-logo" alt="logo" />
    {
      usersWithGrades.map((user, index) => {
        return <Box key={index} user={user.name} grade={user.grade} />
      })
    }
  </header>
</div>)