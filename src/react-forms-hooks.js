///
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function Forms() {
    const { register, handleSubmit, errors, formState } = useForm();
    const onSubmit = async data => {
        await sleep(2000);
        if (data.username === "bill") {
            alert(JSON.stringify(data));
        } else {
            alert("There is an error");
        }
    };

    console.log(errors);
    console.log(formState);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Async Submit Validation</h1>
            <label htmlFor="username">User Name</label>
            <input name="username" placeholder="Bill" ref={register} />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" placeholder="Luo" ref={register} />

            <label htmlFor="email">Email</label>
            <input
                name="email"
                placeholder="bluebill1049@hotmail.com"
                type="text"
                ref={register}
            />

            <div style={{ color: "red" }}>
                {Object.keys(errors).length > 0 &&
                    "There are errors, check your console."}
            </div>
            <input type="submit" />
        </form>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Forms />, rootElement);
