function who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🤪");
        });
    })
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Lurks");
        },300);
    });
}

function where () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the shadodws");
        },500);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

console.log('We are looking for : ')
msg();//🤪lorks in the shadows <-- after 1 second
console.log('Hello')