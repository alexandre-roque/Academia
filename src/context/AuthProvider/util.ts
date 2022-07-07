import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { IUser } from "./types";

const GET_USER_QUERY = gql`
    query ($userEmail: String, $userPassword: String) {
        usuarios(where: { email: $userEmail, senha: $userPassword }) {
            email
            nome
            vinculo
        }
    }
`;

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("u");

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(email: string, senha: string) {
    const [loginFunction, { data: userSearchedData, error: userError }] =
        useLazyQuery(GET_USER_QUERY, {
            variables: {
                userEmail: email,
                userPassword: senha,
            },
        });

    console.log(userSearchedData);

    return userSearchedData;
}
