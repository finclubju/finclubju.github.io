const list_items = [
	{
        src:"assets/blog/bg-img-13.jpg",
        heading:"All about Hedge Fund",
        link:"blog/all-about-hedge-funds.html",
        content:"Hedge funds are managed in many developed countries, many of which manage multi-billion dollar portfolios. Participation in hedge...",
    },{
        src:"assets/blog/bg-img-12.jpg",
        heading:"Impact of Russia-Ukraine War on the Global Economy",
        link:"blog/impact-of-russia-ukraine-war-on-the-global-economy.html",
        content:"Russia’s invasion of Ukraine has not only created immense human suffering, but it is also damaging global trade and will reportedly have major ramifications for the global economy, which is just recovering from the stress of the coronavirus pandemic.",
    },{
        src:"assets/blog/bg-img-11.jpg",
        heading:"Financial Literacy Empowers People, especially Women",
        link:"blog/financial-literacy-empowers-people-especially-women.html",
        content:"Financial literacy and women's empowerment are closely related. Enhancing your financial literacy can help you achieve your life...",
    },{
        src:"assets/blog/bg-img-10.jpg",
        heading:"Africa through an Unprecedented Time",
        link:"blog/africa-through-an-unprecedented-time.html",
        content:"With more than 346 million people facing a food security crisis, Africa is going through an unprecedented time since the coronavirus...",
    },{
        src:"assets/blog/bg-img-9.jpg",
        heading:"Starting With Technical Indicators",
        link:"blog/starting-with-technical-indicators.html",
        content:"The technical indicator is a technical tool that helps you analyze stock price movements, whether the ongoing trend continues or...",
    },{
        src:"assets/blog/bg-img-8.jpg",
        heading:"All About Candlestick Charts",
        link:"blog/all-about-candlestick-charts.html",
        content:"One important consideration in technical analysis is that we rely on the fact that history often repeats itself. It would be wise...",
    },{
        src:"assets/blog/bg-img-7.jpg",
        heading:"Why do Stock Markets fall in times of War?",
        link:"blog/why-do-stock-markets-fall-in-times-of-war.html",
        content:"Global financial markets started falling the day Russia invaded Ukraine. Let's take a look at previous market crashes and the factors...",
    },{
        src:"assets/blog/bg-img-6.jpg",
        heading:"Different Types of Mutual Funds",
        link:"blog/different-types-of-mutual-funds.html",
        content:"Thinking of investing in Mutual Funds? Then it is very important to understand the different types of mutual funds and the benefits...",
    },{
        src:"assets/blog/bg-img-5.jpg",
        heading:"Mutual Funds - An Ideal Investment Option",
        link:"blog/mutual-funds-an-ideal-investment-option.html",
        content:"Searching for investment options? Mutual funds can be your one stop solution. Have a read to know why I am calling it so. There's...",
    },{
        src:"assets/blog/bg-img-3.jpg",
        heading:"The Need to Invest",
        link:"blog/the-need-to-invest.html",
        content:"Exploring why investment is necessary to fight inflation, achieve financial goals, create wealth and fulfil life's aspirations...",
    },{
        src:"assets/blog/bg-img-2.jpg",
        heading:"The Journey Begins",
        link:"blog/the-journey-begins.html",
        content:"Exploring the origins of FinClub, the team's mission and the idea behind the only financial markets oriented club in Jadavpur University...",
    },{
        src:"assets/blog/bg-img-14.jpg",
        heading:"The Indian Economy - Bright Spot on a Dark Horizon",
        link:"blog/the-indian-economy-bright-spot-on-a-dark-horizon.html",
        content:"Recently the IMF forecasts the economic growth of countries for the year 2023. While the IMF is fearing an all-time high Recession, India’s GDP Growth has astoundingly peaked at 6.8 % in contrast to that of Developed countries which ranged from 1% to 3%.",
    },{
        src:"assets/blog/bg-img-15.jpg",
        heading:"The Digital Rupee - A Crucial step in India’s digital transformation  ",
        link:"blog/the-digital-rupee-a-crucial-step-in-india-s-digital-transformation.html",
        content:"Digital rupee can be exchanged for cash, equivalent to the banknotes that RBI issue in paper form. Digital rupee will be an excellent opportunity for India since it will potentially increase the ease of doing business.",
    },
];
const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 6;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
        item_element.classList.add('col-lg-4' , 'mb-5' )
        item_element.style.zIndex='150'
		item_element.innerHTML=`
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src=${item.src} alt="..." />
                                <div class="card-body p-4">
                                    <a class="text-decoration-none link-dark stretched-link" href=${item.link}><h5 class="card-title mb-3"><b>${item.heading}</b></h5></a>
                                    <p class="card-text mb-0" style="text-align: justify; text-justify: inter-word;">${item.content}</p>
                                </div>
                            </div>
                        
        `
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}
const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keyup',(e)=>{
  const searchString=e.target.value;
  const filtered_blogs=list_items.filter( blog =>{
    return blog.heading.toLowerCase().includes(searchString.toLowerCase())
  })
 DisplayList(filtered_blogs,list_element,rows,current_page)
 SetupPagination(filtered_blogs, pagination_element, rows);
})

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
