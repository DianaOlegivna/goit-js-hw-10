import iziToast from "izitoast"

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target
    const delay = Number(event.target.delay.value);
    const state = form.state.value;


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

promise
    .then((delay) => {
        iziToast.success({
            title: "Success",
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: "topRight",
            timeout: 3000,
        });
    })
    .catch((delay) => { 
        iziToast.error({
            title: "Error",
            message: `❌ Rejected promise in ${delay}ms`,
            position: "topRight",
            timeout: 3000,
        });
    })
    .finally(() => {
            form.reset();
        });
});