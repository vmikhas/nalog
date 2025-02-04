export const headerContent = {
	title: 'Всё о налоге на выигрыш',
	desc: 'В России выигрыш считается доходом физических лиц, поэтому победители платят подоходный налог (НДФЛ), как с зарплаты. На&nbsp;этой странице мы объясним,<br class="header__br-tablet-1" /> сколько и когда нужно заплатить государству,<br class="header__br-tablet-2" /> чтобы спать&nbsp;спокойно.',
	logo: {
		imgAttr: {
			src: './images/logo/logo.svg',
			alt: 'Логотип Столото'
		}
	}
}

export const calculateContent = {
	title: 'Сколько я получу после вычета налога?',
	image: {
		sources: [
			{
				srcSet: './images/wallet_m@1.5x.webp 1.5x, ./images/wallet_m@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/wallet_t@1.5x.webp 1.5x, ./images/wallet_t@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 1023px)'
			},
			{
				srcSet: './images/wallet_d@1.5x.webp',
				type: 'image/webp'
			},
			{
				srcSet: './images/wallet_m@1.5x.png 1.5x, ./images/wallet_m@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/wallet_t@1.5x.png 1.5x, ./images/wallet_t@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 1023px)'
			}
		],
		imgAttr: {
			src: './images/wallet_d@1.5x.png',
			alt: 'Кошелек'
		}
	},
	button: 'Рассчитать',
	terms: [
		'Вы получите:',
		'Налог:'
	],
	win: '63 999 999',
	tax: '9 450 095',
	carouselTitle: 'Размеры выигрышей',
	carouselItems: [
		{ number: 'до 4000 ₽', type: 'few' },
		{ number: '4001—14 999 ₽', type: 'average' },
		{ number: '15 000—5 000 000 ₽', type: 'big' },
		{ number: 'От 5 000 001 ₽', type: 'huge' }
	],
	few: {
		descM: 'Если за год вы выиграли до 4000 ₽, налог платить не нужно. ',
		descD: 'По закону выигрыши до 4000 ₽ не облагаются налогом. Но помните: речь идёт о сумме всех выигрышей за год.',
	},
	average: {
		descM: 'Налог — 13 %, но учитывается только часть выигрыша: 4000 ₽ в&nbsp;год налогом не облагаются. Заплатить государству нужно самостоятельно.',
		descD: '<p>Налог на такой выигрыш — 13 %. Правда, учитывается только часть выигрыша: 4000 ₽ в год налогом не облагаются. Поэтому смело вычитайте их из своего приза и платите государству 13 % от остатка. Сделать это нужно самостоятельно.</p>' +
			'<p>Учтите, что подавать декларацию и платить НДФЛ нужно не после каждой победы, а один раз в год.</p>',
	},
	big: {
		descM: 'Налог — 13 %, но учитывается только часть выигрыша: 4000 ₽ налогом не облагаются. Государству заплатит распространитель лотерей: вы получите выигрыш уже после вычета налога.',
		descD: '<p>Налог 13 %. Вы получите выигрыш уже после его вычета: мы всё рассчитаем и подадим декларацию за вас.</p>' +
			'<p>Распространитель лотерей вычтет 13 % из всего выигрыша. Вы можете подать декларацию 3-НДФЛ, чтобы вернуть 13 % от 4000 ₽, которые не облагаются налогом, самостоятельно.</p>',
	},
	huge: {
		descM: '<p>Налог на часть выигрыша, превышающую 5 000 000 ₽ — 15 %. Всё, что меньше этого порога, облагается стандартным налогом в 13 %. Государству заплатит распространитель лотерей: вы получите выигрыш уже после вычета налога.</p>' +
			'<p>Вы можете подать декларацию 3-НДФЛ, чтобы вернуть 13 % от 4000 рублей, которые не облагаются налогом, самостоятельно.</p>',
		descD: '<p>На крупные выигрыши действует прогрессивная налоговая ставка — 15 %. Но эти 15 % вычитаются не из всего выигрыша, а только из той части, что превышает 5 000 000 ₽.</p>' +
			'<p>Представим, что вы выиграли 5 800 000 ₽. Чтобы рассчитать размер выигрыша после вычета налога, нужно из 5 000 000 ₽ вычесть 13 %, а из оставшихся 800 000 — 15 %. Сделает это за вас распространитель лотерей. Выигрыш вы получите уже после вычета.</p>' +
			'<p>Вы можете подать декларацию 3-НДФЛ, чтобы вернуть 13 % от 4000 рублей, которые не облагаются налогом, самостоятельно.</p>'
	},
	calculateFootnote: 'Актуально только для резидентов РФ.'
}

export const winningsContent = {
	image: {
		sources: [
			{
				srcSet: './images/auto_m@1.5x.webp 1.5x, ./images/auto_m@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/auto_t@1.5x.webp 1.5x, ./images/auto_t@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 1023px)'
			},
			{
				srcSet: './images/auto_d@1.5x.webp',
				type: 'image/webp'
			},
			{
				srcSet: './images/auto_m@1.5x.png 1.5x, ./images/auto_m@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/auto_t@1.5x.png 1.5x, ./images/auto_t@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 1023px)'
			}
		],
		imgAttr: {
			src: './images/auto_d@1.5x.png',
			alt: 'Картинка машины',
			loading: 'lazy'
		}
	},
	title: 'Если вы выиграли квартиру или машину, а не деньги',
	text: 'За них тоже придётся заплатить налог.',
	items: [
		'У каждого вещевого приза есть денежный эквивалент, чтобы при желании вы могли забрать свой приз деньгами. От этой суммы и&nbsp;рассчитывается размер налога. Делается это так же, как и в случае с&nbsp;денежным призом.',
		'Организатор лотерей обязан попытаться вычесть налог на&nbsp;такой приз из ваших последующих выигрышей. Но&nbsp;не&nbsp;переживайте: больше половины выигрыша у вас не&nbsp;заберут. Если «Столото» не&nbsp;сможет вычесть налог на&nbsp;приз из последующих выигрышей, оплатить налог придётся самостоятельно.',
		'По адресу, который вы указали при&nbsp;регистрации, оператор лотерей отправит вам сообщение о&nbsp;неудержанном налоге, а налоговая — уведомление, по которому можно оплатить НДФЛ.<a class="winnings__link" href="#1">Как оплатить</a>'
	],
}

export const payContent = {
	title: 'Как заплатить<br class="pay__br"/> налог на&nbsp;выигрыш от&nbsp;4001&nbsp;до&nbsp;14&nbsp;999 ₽',
	paginations: [
		{ number: '1', type: 'one' },
		{ number: '2', type: 'two' },
		{ number: '3', type: 'three' },
	],
	one: {
		subtitle: 'Заполните декларацию 3-НДФЛ',
		desc: '<p class="pay__desc_p">Это можно сделать в личном кабинете на <a class="pay__link" href="https://lkfl2.nalog.ru/lkfl" target="_blank">сайте ФНС.</a></p>' +
			'<p class="pay__desc_p">Или скачайте бланк <a class="pay__link" href="https://www.nalog.gov.ru/html/sites/www.new.nalog.ru/docs/nalogi/ndfl/forms/3ndfl2017.pdf" target="_blank">здесь</a>, распечатайте и заполните от руки.</p>' +
			'<p class="pay__desc_p">Если боитесь ошибиться, скачайте <a class="pay__link" href="https://www.nalog.gov.ru/rn77/program/5961249/" target="_blank">программу-помощник по&nbsp;заполнению <span>3-НДФЛ</span></a>. Ответите&nbsp;на несколько вопросов — программа сформирует декларацию.</p>' +
			'<p>Помимо информации о выигрыше в декларации нужно будет рассказать обо всех источниках дохода, которые были у вас за&nbsp;этот год.</p>'
	},
	two: {
		subtitle: 'Подайте декларацию в налоговую инспекцию',
		desc: 'Электронный документ можно отправить в налоговую в личном кабинете сразу после его заполнения. Если вы заполняли форму от руки, бумажный бланк придётся отнести в <a class="pay__link" href="https://service.nalog.ru/addrno.do" target="_blank">отделение налоговой по месту жительства</a>. Приготовьте два экземпляра документа.'
	},
	three: {
		subtitle: 'Оплатите налог',
		desc: '<p class="pay__desc_p">Проще всего это сделать там же, где подавали декларацию: в&nbsp;личном кабинете налогоплательщика или в отделении налоговой.</p>' +
			'<p>Есть и другой способ: сформируйте платёжное поручение на&nbsp;<a class="pay__link" href="https://service.nalog.ru/payment/payment-search.html?svc=tax-fl" target="_blank">сайте ФНС<a/> и платите его на <a class="pay__link" href="https://www.gosuslugi.ru/pay" target="_blank">портале Госуслуг</a> или&nbsp;в&nbsp;приложении вашего банка. По бумажному экземпляру поручения налог можно оплатить в отделении любого банка.</p>'
	},
	image: {
		sources: [
			{
				srcSet: './images/laptop_d@1.5x.webp',
				type: 'image/webp'
			}
		],
		imgAttr: {
			src: './images/laptop_d@1.5x.png',
			alt: 'Картинка ноутбука',
			loading: 'lazy'
		}
	},
}

export const fillingContent = {
	image: {
		sources: [
			{
				srcSet: './images/forms_m@1.5x.webp 1.5x, ./images/forms_m@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/forms_t@1.5x.webp 1.5x, ./images/forms_t@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 1023px)'
			},
			{
				srcSet: './images/forms_d@1.5x.webp',
				type: 'image/webp'
			},
			{
				srcSet: './images/forms_m@1.5x.png 1.5x, ./images/forms_m@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/forms_t@1.5x.png 1.5x, ./images/forms_t@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 1023px)'
			}
		],
		imgAttr: {
			src: './images/forms_d@1.5x.png',
			alt: 'Бланки декларации по форме 3-НДФЛ',
			loading: 'lazy'
		}
	},
	button: 'Посмотреть образцы',
	title: 'Как заполнить<br class="filling__br-tablet"/> бланк декларации',
	desc: 'Мы приготовили для вас<br class="filling__br-tablet"/> подробную инструкцию. Откройте бланки <span class="filling__desc filling__desc_v">слева</span><span class="filling__desc filling__desc_vm">снизу</span>, чтобы&nbsp;посмотреть подсказки для&nbsp;каждой&nbsp;страницы.',
	info: 'Я заполняю декларацию в&nbsp;специальной программе',
	tooltip: 'В окне «Сведения о доходе», в&nbsp;графе «Код дохода» надо написать код «3011». Это код выигрыша в лотерею.' +
		'<p>Чтобы вычесть из выигрыша необлагаемые налогом 4000&nbsp;₽, выберите код «511» в&nbsp;том же окне в графе «Код вычета».</p>',
	subtitle: {
		submit: 'Подать до 30 апреля',
		pay: 'Оплатить до 15 июля'
	},
	text: {
		submit: 'Если это выходной, то до первого рабочего дня после 30 апреля.',
		pay: 'Если это выходной, то до первого рабочего дня после 15 июля.'
	},
	footnote: 'Например, если вы выиграли в&nbsp;2022&nbsp;году, успейте подать<br class="filling__br-v"/> 3-НДФЛ до&nbsp;2 мая 2023 года, а&nbsp;оплатить налог — до 17 июля 2023 года, потому что и&nbsp;30&nbsp;апреля, и 15 июля в 2023 году&nbsp;будут выходными.'
}

export const residentContent = {
	title: 'Налог на выигрыш для&nbsp;нерезидентов РФ',
	desc: 'Нерезидентами называют тех, кто большую часть года (больше 183&nbsp;дней) живёт и работает за&nbsp;пределами России. Для них налог на выигрыш — 30 %.',
	image: {
		sources: [
			{
				srcSet: './images/planet_m@1.5x.webp 1.5x, ./images/planet_m@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/planet_t@1.5x.webp 1.5x, ./images/planet_t@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 1023px)'
			},
			{
				srcSet: './images/planet_d@1.5x.webp',
				type: 'image/webp'
			},
			{
				srcSet: './images/planet_m@1.5x.png 1.5x, ./images/planet_m@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/planet_t@1.5x.png 1.5x, ./images/planet_t@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 1023px)'
			}
		],
		imgAttr: {
			src: './images/planet_d@1.5x.png',
			alt: 'Картинка планеты Земля',
			loading: 'lazy'
		}
	}
}

export const casesContent = {
	image: {
		sources: [
			{
				srcSet: './images/gift_m@1.5x.webp 1.5x, ./images/gift_m@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/gift_t@1.5x.webp 1.5x, ./images/gift_t@2x.webp 2x',
				type: 'image/webp',
				media: '(max-width: 1023px)'
			},
			{
				srcSet: './images/gift_d@1.5x.webp',
				type: 'image/webp'
			},
			{
				srcSet: './images/gift_m@1.5x.png 1.5x, ./images/gift_m@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 767px)'
			},
			{
				srcSet: './images/gift_t@1.5x.png 1.5x, ./images/gift_t@2x.png 2x',
				type: 'image/png',
				media: '(max-width: 1023px)'
			}
		],
		imgAttr: {
			src: './images/gift_d@1.5x.png',
			alt: 'Картинка подарка',
			loading: 'lazy'
		}
	},
	title: 'В каких случаях налог&nbsp;на выигрыш достигает 35 %',
	desc: 'Бренды и торговые сети<br class="cases__br-tablet"/> время от&nbsp;времени устраивают стимулирующие розыгрыши для&nbsp;того, чтобы заинтересовать клиентов. Выигрыши, полученные от участия в&nbsp;них, облагаются налогом в 35 %.',
	tooltip: 'Обычно налог выплачивают организаторы рекламных розыгрышей, а победитель получает приз уже после вычета.' +
		'<p>Прочитайте правила конкурса, в котором участвуете. Там должно быть прописано, кто будет платить налог в вашем случае.</p>',
	text: 'Иногда «Столото» тоже проводит стимулирующие розыгрыши с&nbsp;призами. Налог на выигрыш в&nbsp;них также 35 %.' +
		'<p>Но не переживайте, перепутать рекламные активности с&nbsp;лотереями сложно: мы всегда указываем на билетах и&nbsp;в&nbsp;рекламных материалах, какие призы разыгрываются в&nbsp;тираже, а&nbsp;какие — в дополнительных акциях.</p>'
}

export const mapContent = {
	title: 'Налоги в других странах',
	desc: 'Победителям из России повезло: во многих других странах налог на&nbsp;выигрыш — выше. Наша&nbsp;интерактивная карта покажет, где&nbsp;выигрывать выгоднее.',
	dots: [
		{ icon: '', type: 'usa' },
		{ icon: '', type: 'india' },
		{ icon: '', type: 'europe' },
		{ icon: '', type: 'russia' },
		{ icon: '', type: 'taiwan' }
	],
	usa: '<b class="map__subtitle">США:</b> В Америке победителю лотереи придётся заплатить дважды: сначала счастливчик должен будет государству 25&nbsp;% федерального налога, а&nbsp;затем ещё до 13 % налогов штата. В каждом штате — свой процент.',
	india: '<b class="map__subtitle">Индия:</b> 31,2 % на выигрыши от&nbsp;10 000 ₹',
	europe: '<b class="map__subtitle">Португалия:</b> 20 % на&nbsp;выигрыши свыше 5000 €' +
		'<p><b class="map__subtitle">Испания:</b> 20 % на выигрыши свыше 2500 €</p>' +
		'<p><b class="map__subtitle">Швейцария:</b> 35 % на&nbsp;выигрыши выше 1000 ₣</p>' +
		'<p><b class="map__subtitle">Нидерланды:</b> 29 % на&nbsp;выигрыши от 499 €</p>' +
		'<p><b class="map__subtitle">Италия:</b> 20 % на выигрыши от&nbsp;500 €</p>',
	russia: '<b class="map__subtitle">Россия:</b> 13 % на выигрыши от&nbsp;4000 ₽ и&nbsp;15&nbsp;%&nbsp;на&nbsp;выигрыши от 5 000 001 ₽',
	taiwan: '<b class="map__subtitle">Тайвань:</b> 20 % на выигрыши от 5000 NT$',
}

export const footerContent = {
	imageLogo: {
		imgAttr: {
			src: './images/logo/logo.svg',
			alt: 'Логотип Столото',
			loading: 'lazy'
		}
	},
	info: '<p>Информация об организаторах лотерей, о правилах их проведения, призовом фонде, количестве призов или выигрышей, сроках, месте&nbsp;и порядке их получения ― на&nbsp;stoloto.ru. Выигрыши носят вероятностный характер. Лотерея не является способом&nbsp;заработка<br class="footer__br-tablet" /> и источником дохода.</p>' +
		'<p>АО «ТК «Центр», ОГРН 1127746385095, адрес: 109316, Москва, Волгоградский пр-т,<br class="footer__br-desktop"/> д. 43, корп. 3, этаж 10, пом. XXV, ком. 13Б. Реклама. 18+</p>',
	socials: [
		{
			imgAttr: {
				src: './images/social/vk.svg',
				alt: 'Логотип Vkontakte',
				loading: 'lazy'
			}
		},
		{
			imgAttr: {
				src: './images/social/ok.svg',
				alt: 'Логотип Одноклассников',
				loading: 'lazy'
			}
		},
		{
			imgAttr: {
				src: './images/social/tik_tok.svg',
				alt: 'Логотип Tik-Tok',
				loading: 'lazy'
			}
		},
		{
			imgAttr: {
				src: './images/social/rutube.svg',
				alt: 'Логотип Rutube',
				loading: 'lazy'
			}
		},
	],
	organizations: [
		{
			sources: [
				{
					srcSet: './images/min_sporta@1.5x.webp 1.5x, ./images/min_sporta@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 1023px)'
				},
				{
					srcSet: './images/min_sporta@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/min_sporta@1.5x.png 1.5x, ./images/min_sporta@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 1023px)'
				}
			],
			imgAttr: {
				src: './images/min_sporta@1.5x.png',
				alt: 'Логотип Министерство спорта РФ',
				loading: 'lazy'
			}
		},
		{
			sources: [
				{
					srcSet: './images/min_fin@1.5x.webp 1.5x, ./images/min_fin@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 1023px)'
				},
				{
					srcSet: './images/min_fin@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/min_fin@1.5x.png 1.5x, ./images/min_fin@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 1023px)'
				}
			],
			imgAttr: {
				src: './images/min_fin@1.5x.png',
				alt: 'Логотип Министерство финансов РФ',
				loading: 'lazy'
			}
		}
	],
	organizationText: 'Организаторами лотерей являются Министерство спорта РФ<br class="footer__br-tablet-min" /> и&nbsp;Министерство финансов РФ.',
	associations: [
		{
			sources: [
				{
					srcSet: './images/world_ass@1.5x.webp 1.5x, ./images/world_ass@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 1023px)'
				},
				{
					srcSet: './images/world_ass@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/world_ass@1.5x.png 1.5x, ./images/world_ass@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 1023px)'
				}
			],
			imgAttr: {
				src: './images/world_ass@1.5x.png',
				alt: 'Логотип Всемирной лотерейной ассоциации',
				loading: 'lazy'
			}
		},
		{
			sources: [
				{
					srcSet: './images/europe_ass@1.5x.webp 1.5x, ./images/europe_ass@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 1023px)'
				},
				{
					srcSet: './images/europe_ass@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/europe_ass@1.5x.png 1.5x, ./images/europe_ass@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 1023px)'
				}
			],
			imgAttr: {
				src: './images/europe_ass@1.5x.png',
				alt: 'Логотип Европейской лотерейной ассоциации',
				loading: 'lazy'
			}
		}
	],
	associationText: '«Столото» состоит во Всемирной и Европейской лотерейных ассоциациях (The World Lottery Association и The European Lotteries Association). Это гарантирует соблюдение прав участников, случайность определения победителей, своевременную выплату выигрышей, конфиденциальность личных данных.'
}