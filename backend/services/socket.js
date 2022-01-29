import { io } from "../server";

let onlineUsers = [];
const addNewUser = (userId, socketId) => {
  !onlineUsers.some((user) => user.userId === userId) &&
    onlineUsers.push({ userId, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUserSoketId = (userId) => {
  const user = onlineUsers.find((user) => user.userId === userId);
  // console.log("getUser func->>", user);
  if (!user) {
    return false;
  }
  return user.socketId;
};
export const getOnlineUserId = () => {
  const user = onlineUsers.map((user) => user.userId);
  // console.log("getUser func->>", user);
  if (!user) {
    return false;
  }
  return user;
};

const webShoketSender = (id) => {
  let targetUser = getUserSoketId(id);
  if (targetUser) {
    io.to(targetUser).emit("update", "profile updated");
  }
};

const webSocket = () => {
  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("newUser", (userId) => {
      addNewUser(userId, socket.id);
    });

    socket.on("disconnect", (reason) => {
      console.log(`disconnect ${socket.id} due to ${reason}`);
      removeUser(socket.id);
    });
  });
};

export { webSocket, getUserSoketId, webShoketSender };

// socket.on("sendNotification", ({ senderId, reciverId, type }) => {
//   const reciverDevice = getUser(reciverId);
//   console.log("reciver id--", reciverDevice.socketId);

//   io.to(reciverDevice.socketId).emit("getNotification", "hello");
// });

//Whenever someone disconnects this piece of code executed
