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
	faPeopleArrows,
	faShippingFast,
	faBars,
	faHeart,
	faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

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
	faPencil = '';
	faPeopleArrows = faPeopleArrows;
	faShippingFast = faShippingFast;
	faClipboardPrescription = '';
	faBars = faBars;
	faHeart= faHeart;
	faHeartCircle = '';
	faGratipay = faGratipay;
	faCalendarAlt = faCalendarAlt

	constructor() {}
}
