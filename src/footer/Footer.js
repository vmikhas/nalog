import Picture from "../constants/Picture";
import parse from "html-react-parser";

export default function Footer({ info, imageLogo, socials, organizations, orgText, associations, assText }) {
	return (
		<section className={"footer"}>
			<div className={"footer__container"}>
				<div className={"footer__wrapper"}>
					<a className={"footer__logo"} href={"index.html"}>
						<Picture {...imageLogo} />
					</a>
					<p className={"footer__info"}>{parse(info)}</p>
					<ul className={"footer__social-list"}>
						{socials.map((social, id) =>
							<li className={`footer__social-item footer__social-item_${id}`} key={id}>
								<a className={`footer__social-link footer__social-link_${id}`} href={"#1"}>
									<Picture imgAttr={social.imgAttr} />
								</a>
							</li>)}
					</ul>
				</div>
				<div className={"footer__inner"}>
					<div className={"footer__org"}>
						<ul className={"footer__org-list"}>
							{organizations.map((organization, id) =>
								<li className={`footer__org-item footer__org-item_${id}`} key={id}>
									<Picture imgAttr={organization.imgAttr} sources={organization.sources} />
								</li>)}
						</ul>
						<p className={"footer__org-text"}>{parse(orgText)}</p>
					</div>
					<div className={"footer__ass"}>
						<ul className={"footer__ass-list"}>
							{associations.map((association, id) =>
								<li className={`footer__ass-item footer__ass-item_${id}`} key={id}>
									<Picture imgAttr={association.imgAttr} sources={association.sources} />
								</li>)}
						</ul>
						<p className={"footer__ass-text"}>{assText}</p>
					</div>
				</div>
			</div>
		</section>
	);
}