// import { createLogger, format, transports } from 'winston';
// import path from 'path';
// import DailyRotateFile from 'winston-daily-rotate-file';
// const { combine, timestamp, label, printf, prettyPrint } = format;

// // custom log format
// const myFormat = printf(({ level, message, label, timestamp }) => {
//   const date = new Date(timestamp);
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   return `${date.toDateString()}
//   ${hours} ${minutes}
//    ${seconds}
//    [${label}] ${level}: ${message}`;
// });

// const logger = createLogger({
//   level: 'info',
//   format: combine(label({ label: 'PH' }), timestamp(), myFormat, prettyPrint()),
//   transports: [
//     new transports.Console(),
//     new transports.File({
//       filename: path.join(
//         process.cwd(),
//         'logs',
//         'winston',
//         'successes',
//         'Phu-%DATE%-success.log'
//       ),
//       level: 'info',
//     }),
//     new DailyRotateFile({
//       filename: path.join(
//         process.cwd(),
//         'logs',
//         'winston',
//         'successes',
//         'Phu-%DATE%-success.log'
//       ),
//       datePattern: 'YYYY-MM-DD-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '14d',
//     }),
//   ],
// });

// const errorLogger = createLogger({
//   level: 'error',
//   format: combine(label({ label: 'PH' }), timestamp(), myFormat, prettyPrint()),
//   transports: [
//     new transports.Console(),
//     new transports.File({
//       filename: path.join(
//         process.cwd(),
//         'logs',
//         'winston',
//         'errors',
//         'Phu%DATE%-error.log'
//       ),
//       level: 'error',
//     }),
//     new DailyRotateFile({
//       filename: path.join(
//         process.cwd(),
//         'logs',
//         'winston',
//         'errors',
//         'Phu%DATE%-error.log'
//       ),
//       datePattern: 'YYYY-MM-DD-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '14d',
//     }),
//   ],
// });

// export { logger, errorLogger };
