const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="h-14 flex items-center px-4">
        <span className="font-bold text-lg">Repos Finder</span>
      </div>
    </div>
  )
}

export default Header;