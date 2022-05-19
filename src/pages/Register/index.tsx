import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/api";

export const Register = () => {
    const [nameValue, setNameValue] = useState("");
    const [cpfValue, setCpfValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");

    const [cepValue, setCepValue] = useState("");
    const [ruaValue, setRuaValue] = useState("");
    const [numValue, setNumValue] = useState("");
    const [bairroValue, setBairroValue] = useState("");
    const [cidadeValue, setCidadeValue] = useState("");
    const [estadoValue, setEstadoValue] = useState("");
    const [compValue, setCompValue] = useState("");

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) =>
        setNameValue(e.currentTarget.value);
    const onCpfChange = (e: React.FormEvent<HTMLInputElement>) =>
        setCpfValue(e.currentTarget.value);
    const onPhoneChange = (e: React.FormEvent<HTMLInputElement>) =>
        setPhoneValue(e.currentTarget.value);

    const onCepChange = (e: React.FormEvent<HTMLInputElement>) =>
        setCepValue(e.currentTarget.value);
    const onRuaChange = (e: React.FormEvent<HTMLInputElement>) =>
        setRuaValue(e.currentTarget.value);
    const onNumChange = (e: React.FormEvent<HTMLInputElement>) =>
        setNumValue(e.currentTarget.value);
    const onBairroChange = (e: React.FormEvent<HTMLInputElement>) =>
        setBairroValue(e.currentTarget.value);
    const onCidadeChange = (e: React.FormEvent<HTMLInputElement>) =>
        setCidadeValue(e.currentTarget.value);
    const onEstadoChange = (e: React.FormEvent<HTMLInputElement>) =>
        setEstadoValue(e.currentTarget.value);
    const onCompChange = (e: React.FormEvent<HTMLInputElement>) =>
        setCompValue(e.currentTarget.value);

    const onEmailChange = (e: React.FormEvent<HTMLInputElement>) =>
        setEmailValue(e.currentTarget.value);
    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) =>
        setPasswordValue(e.currentTarget.value);

    // const checkCep = async (e: FocusEvent<HTMLInputElement>) => {
    //     const cep = e.currentTarget.value.replace(/\D/g, '');
    //     const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    //     setRuaValue(response.data.logradouro);
    //     setBairroValue(response.data.bairro);
    //     setCidadeValue(response.data.localidade);
    //     setEstadoValue(response.data.uf);
    //     setRuaValue(response.data.logradouro);

    // };

    const navigate = useNavigate();

    async function onFinish(values: {
        nome: string;
        cpf: string;
        telefone: string;
        email: string;
        senha: string;
        cep: string;
        nome_rua: string;
        bairro: string;
        numero: number;
        complemento: string;
        cidade: string;
        estado: string;
    }) {
        try {
            const request = await Api.post("/register_user", {
                nome: values.nome,
                cpf: values.cpf,
                telefone: values.telefone,
                email: values.email,
                senha: values.senha,
                cep: values.cep,
                nome_rua: values.nome_rua,
                bairro: values.bairro,
                numero: values.numero,
                complemento: values.complemento,
                cidade: values.cidade,
                estado: values.estado,
            }).then((res) => {
                // message.info('Usuário registrado com sucesso!');
                navigate("/login");
            });
        } catch (error) {
            // message.error("Erro ao registrar o usuário");
        }
    }

    return <></>;
};
