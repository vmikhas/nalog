import Picture from "../constants/Picture";
import parse from "html-react-parser";

export default function Footer({ info, imageLogo, socials, organizations, organizationText, associations, associationText }) {
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
					<div className={"footer__organization"}>
						<ul className={"footer__organization-list"}>
							{organizations.map((organization, id) =>
								<li className={`footer__organization-item footer__organization-item_${id}`} key={id}>
									<Picture imgAttr={organization.imgAttr} sources={organization.sources} />
								</li>)}
						</ul>
						<p className={"footer__organization-text"}>{parse(organizationText)}</p>
					</div>
					<div className={"footer__association"}>
						<ul className={"footer__association-list"}>
							{associations.map((association, id) =>
								<li className={`footer__association-item footer__association-item_${id}`} key={id}>
									<Picture imgAttr={association.imgAttr} sources={association.sources} />
								</li>)}
						</ul>
						<p className={"footer__association-text"}>{associationText}</p>
					</div>
				</div>
			</div>
		</section>
	);
}