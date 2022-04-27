const amqp = require("amqplib");
const users = require("./users");

const mysql = require('mysql');
const con = mysql.createConnection({
  host : "database-1.cziyl6rwn9rl.ap-northeast-2.rds.amazonaws.com",
  port:"3306",
  database:"ahhyun",
  user:'admin',
  password:'12345678'
});

class RabbitmqWrapper {
    constructor(url, queueName, options) {
        // 객체 초기화
        this._url = url;
        this._queueName = queueName;
        this._options = options || {};

        // public
        this.channel = undefined;
        this.queue = undefined;
    }

    // 커넥트 생성하고 채널 연결
    async setup() {
        const connect = await amqp.connect(this._url); //mysqlconnect
        const channel = await connect.createChannel(); //mysql-database
        this.channel = channel;
    }

    // 채널에다가 queue 만들어주기 queue는 메세지를 수신 받을 수 있는 이름
    async assertQueue() {
        const queue = await this.channel.assertQueue(this._queueName, {
            durable: false, // false는 볼 때까지 보관, true는 일정시간이 지나면 사라짐
        });
        this.queue = queue;
    }

    // queue에 데이터보내기
    async sendToQueue(msg) {
        const sending = await this.channel.sendToQueue(
            this._queueName,
            this.encode(msg),
            {
                persistent: true,
            }
        );
        return sending;
    }

    // queue에 있는 데이터 가져오기
    async recvFromQueue() {
        const message = await this.channel.get(this._queueName, {});
        if (message) {
            this.channel.ack(message);
            //   console.log(message.content);
            //   console.log(message.content.toString())
            return message.content.toString();
        } else {
            return null;
        }
    }

    // 문자를 Buffer로 바꿈
    encode(doc) {
        return Buffer.from(JSON.stringify(doc));
    }

    // 메세지보내기
    async send_message(msg) {
        await this.setup(); //레빗엠큐 연결
        await this.assertQueue(); //큐생성
        await this.sendToQueue(msg); //생성큐메세지전달
    }

    // 메세지 가져오기
    async recv_message() {
        await this.setup();W
        return await this.recvFromQueue();
    }
}


const amqpURL = 'amqp://guest:guest@localhost:5672';
const listenForMessages = async () => {
    //채널을 연결
    const connection = await amqp.connect(amqpURL);

    const channel = await connection.createChannel();

    await channel.prefetch(1); await consume({ connection, channel });
}

const consume = ({ connection, channel }) => {
    return new Promise((resolve, reject) => {

        // 원하는 Queue의 이름을 적어준다.
        channel.consume('queue02', async (msg) => {

            // 1. 받은 메시지를 파싱하고. 
            const msgBody = msg.content.toString();

            const data = JSON.parse(msgBody);

            // 1-1. 뭘 받았는지 출력해보자.
            console.log('Received Data : ', data);

            // var rowData;
            // try{
            //     con.query(
            //       'select * from question where id=' + 24,
            //       (error,rows,fields)=>{
            //         if(error) throw error;
            //         console.log(rows);
            //         rowData = rows;
            //       }
            //     );
            //   }catch(error){
            //     console.log('error:',error);
            //   }

            // 받은 데이터를 B 데이터베이스에 넣는다. insert
            try{
                con.query(
                  'insert into ranking (name, result, questionId) values(?,?,?)',
                  [
                    data.user.alias,
                    data.result,
                    data.questionId
                  ],
                  (error,rows,fields)=>{
                    if(error) throw error;
                  }
                );
              }catch(error){
                console.log('error:',error);
              }

            // 2. 잘 받았으니 ACK를 보내자. 
            await channel.ack(msg);
        })

        // Queue가 닫혔거나. 에러가 발생하면 reject
        connection.on('close', (err) => {
            return reject(err);
        })

        connection.on('error', (err) => {
            return reject(err);
        })
    })
}

listenForMessages();

module.exports = RabbitmqWrapper;