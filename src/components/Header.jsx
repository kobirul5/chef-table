import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between my-10 items-center gap-5">
            <div>
                <h3 className="text-3xl font-bold text-[#150B2B]">Recipe Calories</h3>
                </div>
            <div className="text-[#150B2BB3] flex gap-5 md:gap-10">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className="flex gap-3">
                <div>
                    <label className="input input-bordered bg-[#150B2B0D] rounded-full flex items-center gap-2">
                        <FaSearch />
                        <input type="text" placeholder="Search" />
                    </label>
                </div>
                <div className="bg-green-500 rounded-full w-12 h-12 mx-auto text-center flex justify-center items-center"><CgProfile className="text-3xl"/></div>
            </div>
        </div>
    );
};

export default Header;