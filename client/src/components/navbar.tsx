import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useScroll } from "@/utils/scroll-context";

const NavBar = ({ visible, email }: { visible: boolean; email: string }) => {
  const { scrollToCv, showPdf } = useScroll();

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              {visible ? (
                <Link to="/home">Home</Link>
              ) : (
                <Link to="/">Home</Link>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
          {visible ? (
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/oliver">CV</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : showPdf ? (
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>CV</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <button
                        onClick={scrollToCv}
                        style={{ textAlign: "left" }}
                      >
                        <div className="font-medium">View CV</div>
                        <div className="text-muted-foreground">
                          View the CV in browser
                        </div>
                      </button>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href={`${import.meta.env.BASE_URL}CV.pdf`}
                        download="Oliver_Niemi_CV.pdf"
                        style={{ textAlign: "left" }}
                      >
                        <div className="font-medium">Download CV</div>
                        <div className="text-muted-foreground">
                          Download the CV on the device
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>CV</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() =>
                          (window.location.href = `mailto:${email}`)
                        }
                        style={{ textAlign: "left" }}
                      >
                        <div className="font-medium">Get full CV</div>
                        <div className="text-muted-foreground">
                          Contact me to get my full CV
                        </div>
                      </button>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
