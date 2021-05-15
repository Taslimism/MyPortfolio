window.addEventListener( 'load' ,()=>{
    const pb = document.querySelector('#projbut');
    const bb = document.querySelector('#blogbut');
    pb.addEventListener( 'click' ,()=>{
        console.log("hi");
        window.location = '/projects.html';
    })
    bb.addEventListener('click',()=>{
        console.log("hi");
        window.location = '/blogs.html';
    })
})