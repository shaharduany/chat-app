import React, { useState } from "react";
import { Alert, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { joinRoom } from "../scripts/rooms-scripts";
import styles from "../styles";

export default function SearchBar(props) {
    const style = styles();
    
    const user = useSelector(state => state.user);
    
    const [search, setSearch] = useState("");
    const handleSearchChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const addClicked = async(event) => {
        event.preventDefault();
        console.log(user.id);
        await joinRoom(user.id, search);
        setSearch("");
    }

  return <div style={style.searchBar}>
      <Alert variant="dark">
        <Alert.Heading>SEARCH A NEW ROOM</Alert.Heading>
        <Form style={style.searcHBar}>
            <InputGroup>
                <FormControl
                placeholder="Enter room name, if none find, one will be created"
                type="text"
            value={search}
            onChange={handleSearchChange}
                />
                <Button
                variant="primary"
                size="lg"
                onClick={addClicked}
                >
                    ADD
                </Button>
            </InputGroup>

        </Form>
      </Alert>
  </div>;
}
