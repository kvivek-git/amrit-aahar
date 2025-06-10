export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-[#FFFFFF] text-[#5E412E] shadow-md">
        <img src="/icons/menu.png" alt="menu" className="h-10 cursor-pointer" />
        <h1 className="font-bold text-2xl mx-2">Open Label Nutrition</h1>
        <div className="flex items-center gap-4">
          
          <img src="/icons/cart.png" alt="menu" className="h-10 cursor-pointer" />
          <img src="/icons/profile.png" alt="menu" className="h-10 cursor-pointer" />
        </div>
      </nav>
    );
  }
  