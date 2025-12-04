export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Plieggo - Inicio" className="ml-2 flex items-center gap-3">
      <img 
        src="/logo.svg" 
        alt="Plieggo Logo"
        className="h-12 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-2xl font-bold text-foreground">Plieggo</span>
    </a>
  )
}