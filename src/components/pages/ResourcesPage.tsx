import { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { ResourceCard } from '../ResourceCard';
import { resourcesData, type ResourceType, type ResourceLevel, type ResourceInstrument } from '../../data/resourcesData';

interface ResourcesPageProps {
  onNavigate: (page: string, id?: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all');
  const [selectedInstrument, setSelectedInstrument] = useState<ResourceInstrument>('all');
  const [selectedLevel, setSelectedLevel] = useState<ResourceLevel | 'all'>('all');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'views'>('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Extract unique values for filters
  const languages = ['All', ...Array.from(new Set(resourcesData.map(r => r.language)))];
  const types: Array<ResourceType | 'all'> = ['all', 'pdf', 'worksheet', 'notes', 'image', 'link'];
  const instruments: ResourceInstrument[] = ['all', 'guitar', 'piano', 'ukulele', 'violin', 'flute', 'drums', 'singing'];
  const levels: Array<ResourceLevel | 'all'> = ['all', 'beginner', 'intermediate', 'advanced'];

  // Filter and sort resources
  const filteredResources = useMemo(() => {
    let filtered = resourcesData.filter((resource) => {
      const matchesSearch = 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = selectedType === 'all' || resource.type === selectedType;
      const matchesInstrument = selectedInstrument === 'all' || resource.instrument === selectedInstrument || resource.instrument === 'all';
      const matchesLevel = selectedLevel === 'all' || resource.level === selectedLevel || resource.level === 'all';
      const matchesLanguage = selectedLanguage === 'All' || resource.language === selectedLanguage;

      return matchesSearch && matchesType && matchesInstrument && matchesLevel && matchesLanguage;
    });

    // Sort
    if (sortBy === 'featured') {
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
    } else if (sortBy === 'views') {
      filtered.sort((a, b) => b.views - a.views);
    }

    return filtered;
  }, [searchQuery, selectedType, selectedInstrument, selectedLevel, selectedLanguage, sortBy]);

  const featuredResources = useMemo(
    () => resourcesData.filter(r => r.featured).slice(0, 3),
    []
  );

  const recentResources = useMemo(
    () => [...resourcesData].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()).slice(0, 4),
    []
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Learning Resources</h1>
            <p className="text-lg text-muted-foreground">
              Access our library of PDFs, worksheets, notes, and curated resources
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {!searchQuery && selectedType === 'all' && selectedInstrument === 'all' && selectedLevel === 'all' && selectedLanguage === 'All' && (
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Featured Resources</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onClick={() => onNavigate('resource-detail', resource.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recently Added */}
      {!searchQuery && selectedType === 'all' && selectedInstrument === 'all' && selectedLevel === 'all' && selectedLanguage === 'All' && (
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold mb-8">Recently Added</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onClick={() => onNavigate('resource-detail', resource.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse All Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-bold mb-8">
            {searchQuery || selectedType !== 'all' || selectedInstrument !== 'all' || selectedLevel !== 'all' || selectedLanguage !== 'All' ? 'Search Results' : 'Browse All Resources'}
          </h2>

          {/* Search and Filters - Sticky on Mobile/Tablet */}
          <div className="sticky top-[73px] lg:top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:static lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:py-0 mb-6">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full lg:hidden mb-4 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters & Search
              </span>
              {filtersOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>

            <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block space-y-4`}>
              {/* Search and Filters Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
                {/* Search Box */}
                <div className="relative lg:col-span-4">
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="text"
                      placeholder="Search resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 text-sm sm:text-base rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Type Filter */}
                <div className="lg:col-span-2">
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as ResourceType | 'all')}
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-xl sm:rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Types</option>
                    <option value="pdf">PDF</option>
                    <option value="worksheet">Worksheet</option>
                    <option value="notes">Notes</option>
                    <option value="image">Image</option>
                    <option value="link">Link</option>
                  </select>
                </div>

                {/* Instrument Filter */}
                <div className="lg:col-span-2">
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Instrument</label>
                  <select
                    value={selectedInstrument}
                    onChange={(e) => setSelectedInstrument(e.target.value as ResourceInstrument)}
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-xl sm:rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {instruments.map((inst) => (
                      <option key={inst} value={inst}>
                        {inst.charAt(0).toUpperCase() + inst.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Level Filter */}
                <div className="lg:col-span-2">
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value as ResourceLevel | 'all')}
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-xl sm:rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Language Filter */}
                <div className="lg:col-span-2">
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm sm:text-base rounded-xl sm:rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sort and Clear Row */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <div className="flex-1 sm:flex-none">
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block">Sort By</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSortBy('featured')}
                      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        sortBy === 'featured'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent hover:bg-accent/80'
                      }`}
                    >
                      Featured
                    </button>
                    <button
                      onClick={() => setSortBy('newest')}
                      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        sortBy === 'newest'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent hover:bg-accent/80'
                      }`}
                    >
                      Newest
                    </button>
                    <button
                      onClick={() => setSortBy('views')}
                      className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                        sortBy === 'views'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-accent hover:bg-accent/80'
                      }`}
                    >
                      Most Viewed
                    </button>
                  </div>
                </div>

                <div className="sm:ml-auto">
                  <label className="text-xs sm:text-sm text-muted-foreground mb-2 block opacity-0 pointer-events-none">Clear</label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedType('all');
                      setSelectedInstrument('all');
                      setSelectedLevel('all');
                      setSelectedLanguage('All');
                    }}
                    className="w-full sm:w-auto"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredResources.length > 0 ? (
            <>
              <div className="text-sm text-muted-foreground mb-6">
                Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    resource={resource}
                    onClick={() => onNavigate('resource-detail', resource.id)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setSelectedInstrument('all');
                  setSelectedLevel('all');
                  setSelectedLanguage('All');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our instructors can help you find the right learning materials for your goals
            </p>
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}