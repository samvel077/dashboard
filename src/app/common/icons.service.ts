import { Injectable } from '@angular/core';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { 
	faWallet,
	faCommentAlt,
	faChevronLeft,
	faChevronRight,
	faTrashAlt,
	faBell,
	faEllipsisH,
	faVolumeUp,
	faTimes,
	faSearch,
	faHome,
	faUserAlt,
	faUserFriends,
	faPencil,
	faPeopleArrows,
	faShippingFast,
	faClipboardPrescription,
	faBars,
	faHeart,
	faHeartCircle,
	faCalendarAlt
} from '@fortawesome/pro-light-svg-icons';

@Injectable({
	providedIn: 'root',
})
export class IconsService {
	faWallet = faWallet;
	faCommentAlt = faCommentAlt;
	faTrashAlt = faTrashAlt;
	faChevronLeft = faChevronLeft;
	faChevronRight = faChevronRight;
	faBell = faBell;
	faEllipsisH = faEllipsisH;
	faVolumeUp = faVolumeUp;
	faTimes = faTimes;
	faSearch = faSearch;
	faHome = faHome;
	faUserAlt = faUserAlt;
	faUserFriends = faUserFriends;
	faPencil = faPencil;
	faPeopleArrows = faPeopleArrows;
	faShippingFast = faShippingFast;
	faClipboardPrescription = faClipboardPrescription;
	faBars = faBars;
	faHeart= faHeart;
	faHeartCircle = faHeartCircle;
	faGratipay = faGratipay;
	faCalendarAlt = faCalendarAlt

	constructor() {}
}
