import React from "react";
import User from "./User";
import { useRef } from "react";
export default class App extends React.Component {
    state = {
        users: [
            { id: 1, name: "Ivan", age: 30 },
            { id: 2, name: "Marko", age: 35 },
            { id: 3, name: "Ana", age: 25 },
        ],
    };

    handleButtonPress = () => {
        const { users } = this.state;

        const newUsers = users.map((user) => {
            return { ...user, age: user.age + 1 };
        });

        this.setState({ users: newUsers });
    };

    handleNameChange = (event, index) => {
        const { users } = this.state;
        const newUsers = [...users];

        newUsers[index].name = event.target.value;
        this.setState({ users: newUsers });
    };

    addNewUserName = (event) => {
        console.log("New user name " + event.target.value);
        const newUserName = event.target.value;
        return newUserName;
    };

    addNewUserAge = (event) => {
        return console.log("New user age " + event.target.value);
        const newUserAge = event.target.value;
        return newUserAge;
    };

    addUser = () => {
        const { users } = this.state;
        // Kako da varijablu newUser napunim s podacima iz input polja?
        const newId = users.length + 1;

        const newUser = { id: newId, name: "Manda", age: 75 };
        const newUsers = [...users, newUser];
        console.log("newUser.name " + newUser.name);
        console.log("newUser.age " + newUser.age);
        this.setState({
            users: [...users, newUser],
        });
        return console.log(newUsers);
    };

    render() {
        const { users } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>React aplikacija</h1>
                        <p>Ovo zbilja radi</p>
                        <button
                            className="btn btn-primary mb-3"
                            onClick={this.handleButtonPress}
                        >
                            Promjena godina
                        </button>

                        {users.map((user, index) => (
                            <User
                                key={user.id}
                                name={user.name}
                                age={user.age}
                                onNameChange={(event) => this.handleNameChange(event, index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h2>Unos novog korisnika</h2>
                        <div className="input-group">
                            <span className="input-group-text">Ime</span>
                            <input
                                className="form-control"
                                type="text"
                                onChange={this.addNewUserName}
                            />
                            <span className="input-group-text">Dob</span>
                            <input
                                className="form-control"
                                type="number"
                                onChange={this.addNewUserAge}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={this.addUser}
                            >
                                Dodaj korisnika
                            </button>
                            <p className="text-secondary mt-2">
                                Ovo ne radi. U console.logu hvata što se piše u input poljima, kad
                                se stisne button ispisuje se hardkodirani tekst jer ne mogu nikako
                                podatke iz input polja poslati u funkciju addUser
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
