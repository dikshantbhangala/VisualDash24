const {Server}= required("socket.io");
const io = new Server(3001,{
    cors : true,
});
io.on('connection', socket=>{
    console.log('Socket Connected', socket.id);
});