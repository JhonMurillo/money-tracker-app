import { toast } from 'react-toastify';
export default function showToast(messages = []) {
    messages = messages.slice(0, 5);

    messages.map((item, i) => toast[item.type](item.text, {
        toastId: i
    }))
}