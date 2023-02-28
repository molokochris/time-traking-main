//generating random 6 numbers
let sum = 0;
hrs = Array.from({length: 6}, () => Math.floor(Math.random() * 19) + 1);

let userElement = document.getElementById("control");
let cardElement = document.getElementById("rows");
let cardHtml = '';
let userHtml = '';

let card = {
    task: ['Exercise', 'Games', 'Self Care', 'Work', 'Study', 'Social'],
    hours: hrs,
    lwTime: 5, 
    src: ['assets/images/icons/icon-exercise.svg','assets/images/icons/icon-play.svg',
            'assets/images/icons/icon-self-care.svg','assets/images/icons/icon-work.svg',
            'assets/images/icons/icon-study.svg', 'assets/images/icons/icon-social.svg'
        ],
    color: ['rgba(75,206,130,255)', 'rgba(86,194,230,255)',
            'rgba(240,199,91,255)', 'rgba(255,139,100,255)',
            'rgba(255,94,125,255)', 'rgba(114,53,209,255)']
    };

let user = [
    {
        name: 'Moloko Chris Poopedi',
        avator: 'assets/images/my_pic.png'
    },
    {
        name: 'Jeremy Robson',
        avator: 'assets/images/image-jeremy.png'
    }
];

function printCards() {
    for(i = 0; i < card.task.length; i++) {
        cardHtml = `<td class="card">
        <div style="background-color: ${card.color[i]};" class="innerCard">
            <div style="width: 100%; text-align: right; padding-right: 6%;">
                <img src="${card.src[i]}" alt="${card.task[i]}-icon">
            </div>
        </div>
        <div class="outerCard">
            <span>
                <table id="infoTab">
                    <tr>
                        <td style="text-align: left; font-weight: bold;">
                          ${card.task[i]}
                        </td>
                        <td style="text-align: end;">
                            <span>
                                <img src="assets/images/icons/icon-ellipsis.svg" alt="">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: left; font-size: 50px;">
                          ${card.hours[i]}hrs
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: left;">
                            <p>Last Week: ${card.lwTime}hrs</p>
                        </td>
                    </tr>
                </table>
            </span>
        </div>
    </td>`;
    cardElement.innerHTML += cardHtml;
    }
}

function userInfo() {
    // number > 0 ? number2 = 0: number2 = 1;
    userHtml = 
    `<div id="prof">
        <span>
            <img src="${user[1].avator}" alt="profile-pic"><br>
        </span>
        <div id="name"><p>Report for <h1>${user[1].name}</h1></p></div>
    </div>
    <div id="timeframe">
        <ul>
            <li>
                <span onclick="">Daily</span>
            </li>
            <li>
                <span onclick="">Weekly</span>
            </li>
            <li>
                <span onclick="">Monthly</span>
            </li>
        </ul>
    </div>
    `;

    userElement.innerHTML += userHtml;
}

// function changeUser() {
//     // document.getElementById('secondUser').style.display = 'block';
//     console.log("user profile clickedd")
// };