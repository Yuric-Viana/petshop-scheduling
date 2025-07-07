import { apiConfig } from './api-config.js';

export async function scheduleNew({ id, nameTutor, namePet, cellphone, description, when }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nameTutor, namePet, cellphone, description, when })
        })

        alert('Agendamento realizado com sucesso!')

    } catch (error) {
        console.log(error);
        alert('Não possível realizar o agendamento. Procure um de nossos colaboradores.')
    }
}