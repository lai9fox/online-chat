export default {
  contactInfo() {
    const contactInfo = [];
    for (let i = 1; i <= 15; i++) {
      const temp = {
        contactId: `xxx-yyy-zzz-${i}`,
        userName: `TestBot-${i}`,
        userGravatorURI: `src/assets/image/user-${i % 4 + 1}.png`,
        lastContact: Date.now() - Math.ceil(Math.random() * 24 * 60 * 60 * 1000 * 7),
        latestMessage: `Hello! I am TestBot-${i}, It's my honor to meet you!`,
        unread: Math.ceil(Math.random() * 10),
        message: [],
      }
      for (let j = 15 - i; j--; j >= 0) {
        temp.message.push({
          sendTime: Date.now() - Math.ceil(Math.random() * 24 * 60 * 60 * 1000),
          trigger: Math.random() > 0.5 ? 0 : 1,
          content: 'What rational you a least, hand.'.repeat(Math.ceil(Math.random() * 4)),
        })
      }
      contactInfo.push(temp);
    }
    return contactInfo;
  },
  storiesUsers() {
    const storiesUsers = [];
    for (let i = 1; i <= 4; i++) {
      storiesUsers.push({
        gravator: `src/assets/image/user-${i}.png`,
        userId: `user-${i}`,
      });
    }
    return storiesUsers;
  },
};
