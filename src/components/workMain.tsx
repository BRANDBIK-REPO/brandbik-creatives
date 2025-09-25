/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { useAppDispatch } from "@/redux/hooks";
import { fetchProjects, fetchProjectById } from "@/redux/projectsSlice";
 
 
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/contexts/LanguageContext"
import { useRef } from "react";

// Define project categories
type Category = "all" | "website" | "app" | "branding" | "social"

// Define project interface
interface Project {
  id: number
  title: string 
  description: string
  image: string
  category: Category
}

export default function WorkMain() {
  const dispatch = useAppDispatch();
  // Access Redux state if needed:
  // const { list, loading, error } = useAppSelector((state: RootState) => state.projects);
  const router = useRouter();
  const { t, language } = useLanguage();
  // State to track active category
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.work-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  // Fetch projects from API on mount
  useEffect(() => {
    dispatch(fetchProjects()).then((res) => {
      // Log the API response
      console.log('API Projects Response:', (res as any).payload);
    });
  }, [dispatch]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Add useEffect to handle initial category from URL and history state
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('category') as Category;
    
    // Check URL parameters first
    if (categoryParam) {
      setActiveCategory(categoryParam);
      // Store in history state
      window.history.replaceState({ category: categoryParam }, '');
    } else {
      // If no URL param, check history state
      const historyState = window.history.state;
      if (historyState?.category) {
        setActiveCategory(historyState.category);
      } else {
        setActiveCategory('all'); // Default to 'all' if nothing is set
      }
    }
  }, []);

  // Responsive items per page
  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth < 640) {
        setItemsPerPage(6)
      } else {
        setItemsPerPage(9)
      }
    }
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  // Scroll to top of section when currentPage changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const handleCategoryChange = (category: Category) => {
    setIsLoading(true)
    setActiveCategory(category);
    // Update history state when category changes
    window.history.replaceState({ category }, '');
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 500)
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Fetch project details by id and log response
  const handleProjectDetails = (id: string) => {
    dispatch(fetchProjectById(id)).then((res) => {
      console.log('API Project Details Response:', (res as any).payload);
    });
  };

  const handleProjectClick = (projectTitle: string, projectCategory?: Category, projectId?: string | number) => {
    if (projectId) {
      handleProjectDetails(String(projectId));
    }
    
    // Map project titles to their corresponding folder names
    const routeMap: { [key: string]: string } = {
      "The Biriyani & Beyond Co": "biriyani-and-beyond",
      [t('work.projects.shetalks.title')]: "she-talks",
      // Add other mappings as needed
    };

    // Special routing for shetalks branding/app
    if (projectTitle === t('work.projects.shetalks.title')) {
      if (projectCategory === 'branding') {
        router.push(`/works/shetalks?category=${activeCategory}`);
        return;
      } else if (projectCategory === 'app') {
        router.push(`/works/she-talks?category=${activeCategory}`);
        return;
      }
    }

    // Special routing for indoarab social
    if (projectTitle === t('work.projects.indoarab.title') && projectCategory === 'social') {
      router.push(`/works/indoarab-social?category=${activeCategory}`);
      return;
    }

    // Special routing for tenderoutes social
    if (projectTitle === t('work.projects.tenderoutes.title') && projectCategory === 'social') {
      router.push(`/works/tenderoutes-social?category=${activeCategory}`);
      return;
    }

    // Special routing for abo-glumbo website
    if (projectTitle === t('work.projects.aboglumbo.title') && projectCategory === 'website') {
      router.push(`/works/abo-glumbo-web?category=${activeCategory}`);
      return;
    }
      // Special routing for khbrahweb website
      if (projectTitle === t('work.projects.khbrahweb.title') && projectCategory === 'website') {
        router.push(`/works/khbrah-web?category=${activeCategory}`);
        return;
      }
      // Special routing for usraweb website
      if (projectTitle === t('work.projects.usraweb.title') && projectCategory === 'website') {
        router.push(`/works/usra-web?category=${activeCategory}`);
        return;
      }
      // Special routing for usrapp (Usra App)
      if (projectTitle === t('work.projects.usrapp.title') && projectCategory === 'app') {
        router.push(`/works/usra-app?category=${activeCategory}`);
        return;
      }
   
    const folderName = routeMap[projectTitle] || projectTitle.toLowerCase().replace(/\s+/g, '-');
    const route = `/works/${folderName}?category=${activeCategory}`;
    router.push(route);
  };

  // Projects state from API
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  // Fetch projects from API on mount
  useEffect(() => {
    dispatch(fetchProjects()).then((res) => {
      const apiProjects = (res as any).payload || [];
      // Map API response to Project[]
      const mappedProjects: Project[] = apiProjects.map((proj: any) => ({
        id: proj._id || proj.id,
        title: language === 'ar' ? proj.projectNameAr || proj.projectName : proj.projectName,
        description: language === 'ar' ? proj.scopDiscriptionAr || proj.scopDiscription : proj.scopDiscription,
        image: proj.backGroundImage || proj.mainImg,
        category: proj.service?.toLowerCase() || 'website', // fallback to website if not present
      }));
      setAllProjects(mappedProjects);
      console.log('API Projects Response:', apiProjects);
    });
  }, [dispatch, language]);

  // Filter projects by active category
  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter((project) => project.category === activeCategory)
  
  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Category labels and counts
  const categories = [
    { id: "all", label: t('works.categories.all') || 'All', count: allProjects.length },
    { id: "website", label: t('works.categories.website'), count: allProjects.filter((p) => p.category === "website").length },
    { id: "app", label: t('works.categories.app'), count: allProjects.filter((p) => p.category === "app").length },
    { id: "branding", label: t('works.categories.branding'), count: allProjects.filter((p) => p.category === "branding").length },
    { id: "social", label: t('works.categories.social'), count: allProjects.filter((p) => p.category === "social").length },
  ]

  // Helper for pagination range with ellipsis
  function getPaginationRange(current: number, total: number): (number | string)[] {
    const delta = 2;
    const range: (number | string)[] = [];
    for (let i = Math.max(1, current - delta); i <= Math.min(total, current + delta); i++) {
      range.push(i);
    }
    // Check first element for ellipsis logic
    if (typeof range[0] === 'number' && (range[0] as number) > 2) {
      range.unshift('...');
      range.unshift(1);
    } else if (typeof range[0] === 'number' && (range[0] as number) === 2) {
      range.unshift(1);
    }
    // Check last element for ellipsis logic
    if (typeof range[range.length - 1] === 'number' && (range[range.length - 1] as number) < total - 1) {
      range.push('...');
      range.push(total);
    } else if (typeof range[range.length - 1] === 'number' && (range[range.length - 1] as number) === total - 1) {
      range.push(total);
    }
    return range;
  }

  return (
    <main ref={sectionRef} className={`container mx-auto px-4 py-10 md:py-20 w-full h-auto md:px-16 lg:px-32 font-poppins work-content ${language === 'ar' ? 'text-right' : ''}`}>
      {/* Navigation - Responsive with horizontal scrolling on mobile */}
      <nav className="w-full mb-6 md:mb-12">
        <div className="flex flex-wrap  justify-center gap-3 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id as Category)}
              className={`px-3 md:px-7 py-2 md:py-3 cursor-pointer rounded-full text-[12px] md:text-sm whitespace-nowrap border border-gray-300 transition-colors ${
                activeCategory === category.id ? "bg-black text-white" : "text-black hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Section Title with Count */}
      <div className="mb-8 md:mb-14">
        <h1 className="text-[25px] md:text-[48px] font-medium inline-flex items-start">
          {categories.find((c) => c.id === activeCategory)?.label}
         
        </h1>
      </div>

      {/* Projects Grid - Strict 3x3 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {isLoading ? (
          // Loading skeleton - 9 items for 3x3 grid
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-[200px] md:h-[250px] mb-4"></div>
              <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-full"></div>
            </div>
          ))
        ) : (
          paginatedProjects.map((project) => {
            // Try to get _id if present (from API), else fallback to id (local data)
            const projectId = (project as { _id?: string })._id || project.id;
            return (
              <div 
                key={project.id}
                className="project-card sm:mb-4 border border-gray-200 cursor-pointer"
                onClick={() => handleProjectClick(project.title, project.category, projectId)}
              >
              <div 
                className="mb-3 md:mb-4 overflow-hidden relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] md:h-[250px] hover:scale-105 transition-transform duration-300 object-cover"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
                {hoveredProjectId === project.id && (
                  <div 
                    className="absolute pointer-events-none transition-transform duration-100 ease-out"
                    style={{
                      left: mousePosition.x,
                      top: mousePosition.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="flex items-center justify-center w-[50px] md:w-[60px] h-[50px] md:h-[60px] gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md bg-white/20">
                      <span className={`text-white text-xs md:text-sm font-light`}>View</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-3 md:px-4 pb-4 md:pb-5">
                <h3 className={`text-base md:text-lg lg:text-[24px] font-medium`}>{project.title}</h3>
                <p className={`text-xs md:text-sm text-gray-600`}>{project.description}</p>
              </div>
            </div>
          )})
        )}
      </div>

      {/* Pagination Controls */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center mt-8">
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white ">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#120E43] hover:bg-[#000000]'}`}
            >
              <span className="text-lg">&#60;</span>  
            </button>
            {getPaginationRange(currentPage, totalPages).map((page, idx) =>
              typeof page === 'number' ? (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-base font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-[#000000] text-white shadow'
                      : 'bg-indigo-50 text-[#120E43] hover:bg-indigo-100'
                  }`}
                  style={{ minWidth: 32 }}
                >
                  {page}
                </button>
              ) : (
                <span key={"ellipsis-" + idx} className="px-2 text-gray-400 select-none">...</span>
              )
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'}`}
            >
              <span className="text-lg">&#62;</span>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
