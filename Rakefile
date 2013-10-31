IS_WINDOWS = (RUBY_PLATFORM =~ /mingw/i) ? true : false
IS_MAC = (RUBY_PLATFORM =~ /darwin/i) ? true : false

WINPATH = "x:"
LINPATH = "/remote/msuweb"
FOLDER = "/blog"

# CHECK system
desc "Check if all the tools are installed."
task :check do
  puts "Platform: "+ RUBY_PLATFORM
  sh "ruby --version"
  sh "gem --version"
  sh "node --version"
  sh "npm --version"
  sh "jekyll --version"
  sh "grunt --version"
end

# BUILD the website using jekyll
desc "Build using jekyll build"
task :build do
    puts "Running build task..."
    sh "jekyll build"
end

# LINT
desc "Lint using grunt-html-validation"
task :lint => [:build] do
    sh "grunt validation"
end


# DEPLOY - WINDOWS ONLY
desc "Deploy on Windows"
task :windeploy => [:build] do
    puts "Deploying the site from windows..."
    puts "The target path is: "+WINPATH+FOLDER

    rm_rf(WINPATH+FOLDER)
    cp_r("_site", WINPATH)
    mv(WINPATH+"/_site", WINPATH+FOLDER)
end

# DEPLOY - LINUX ONLY
desc "Deploy on Linux"
task :lindeploy => [:build] do
    puts "Deploying the site from Linux..."
    puts "The target path is: "+LINPATH+FOLDER

    rm_rf(LINPATH+FOLDER)
    cp_r("_site", LINPATH)
    mv(LINPATH+"/_site", LINPATH+FOLDER)
end



# DEPLOY - PLATFORM INDEPENDENT
desc "Deploy. Tries to detect the platform. Might be wrong."
task :deploy =>[:commit] do
    if(IS_WINDOWS)
        Rake::Task["windeploy"].execute
    else
        Rake::Task["lindeploy"].execute
    end
end

# NEW POST
desc "Creates a new post in _posts directory"
task :new do
    puts "Enter post-title-like-this: "
    title = STDIN.gets.gsub(" ", "-").strip.downcase
    filename = ''+Time.new.strftime('%Y-%m-%d-')+title+".markdown"
    puts "Creating "+filename
    cp '_posts/template.markdown', '_posts/'+filename
    sh 'gvim ' + '_posts/'+filename
end

# COMMIT and INCREMENT VERSION
desc "Commits all changes, increments version and attempts to push to github"
task :commit => [:build] do
    puts "Running automated repository commit task..."

    puts "Please enter commit message: "
    msg = STDIN.gets.strip!

    msg = "Auto-commited with Rake (" +Time.now.strftime("%Y-%m-%d")+ ")" if msg.empty?
    sh "git add ."
    sh "git commit -a -m \"" +msg+ "\""
    sh "npm version patch"
    sh "git push"
end

# DEFAULT: BUILD AND LINT
desc "Default task is to build the site, then lint it. Doesn't commit. Doesn't deploy."
task :default => [:build, :lint]
