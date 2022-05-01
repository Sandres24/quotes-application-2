export const randomNumber = ({ limit }) => Math.floor(Math.random() * limit);

export const randomColor = ({ opacity = '1' } = {}) => {
   return `rgba(
      ${randomNumber({ limit: 256 })},
      ${randomNumber({ limit: 256 })},
      ${randomNumber({ limit: 256 })},
      ${opacity})`;
};
