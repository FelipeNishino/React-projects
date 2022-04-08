import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation ADD_USER($username: String = "", $password: String = "", $name: String = "") {
        insert_user(objects: { name: $name, password: $password, username: $username }) {
            returning {
                name
                id
                password
            }
        }
    }
`;
