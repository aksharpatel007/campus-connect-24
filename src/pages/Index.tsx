import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Upload, MessageSquare, Video, Award } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <GraduationCap className="h-20 w-20 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect. Collaborate. Create.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            The ultimate platform for college students to network, share projects, and build together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link to="/auth?mode=signup">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/projects">Explore Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for students, by students. A complete ecosystem for academic collaboration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-slide-up">
            <Card className="border-2 hover:shadow-medium transition-all hover:border-primary/50">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Connect with Peers</CardTitle>
                <CardDescription>
                  Build your network by following classmates and discovering students with similar interests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-all hover:border-secondary/50">
              <CardHeader>
                <Upload className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Share Your Projects</CardTitle>
                <CardDescription>
                  Showcase your work, get feedback, and even sell your projects to other students
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-all hover:border-accent/50">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Real-time Chat</CardTitle>
                <CardDescription>
                  Collaborate instantly with direct messaging and group chats for project teams
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-all hover:border-primary/50">
              <CardHeader>
                <Video className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Video Meetings</CardTitle>
                <CardDescription>
                  Host study sessions and team meetings with integrated video conferencing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-all hover:border-secondary/50">
              <CardHeader>
                <Award className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Verified Profiles</CardTitle>
                <CardDescription>
                  Authentic community with college email verification ensuring genuine connections
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-all hover:border-accent/50">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Academic Focus</CardTitle>
                <CardDescription>
                  Designed specifically for education with features tailored to student needs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-hero text-white border-0 shadow-large">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to join your college community?</h2>
              <p className="text-xl mb-8 text-white/90">
                Sign up now with your college email and start connecting
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/auth?mode=signup">Create Your Account</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 CollegeHub. Built for students, by students.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
