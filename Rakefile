IS_WINDOWS = (RUBY_PLATFORM =~ /mingw/i) ? true : false
IS_MAC = (RUBY_PLATFORM =~ /darwin/i) ? true : false

WINPATH = "x:"
LINPATH = "/remote/msuweb"
FOLDER = "/blog"

desc "Build using jekyll --no-auto"
task :build do
    puts "Running build task..."
    sh "jekyll build"
end

desc "Lint using grunt htmllint"
task :lint => [:build, :html5compliance] do
    sh "grunt validation"
end

desc "Deploy on Windows (uses build, html5compliance)"
task :windeploy => [:build, :html5compliance] do
    puts "Deploying the site from windows..."
    puts "The target path is: "+WINPATH+FOLDER

    #sh "jekyll --no-auto " + WINPATH + FOLDER
    rm_rf(WINPATH+FOLDER)
    cp_r("_site", WINPATH)
    mv(WINPATH+"/_site", WINPATH+FOLDER)
end

desc "Deploy on Linux (uses build, html5compliance)"
task :lindeploy => [:build, :html5compliance] do
    puts "Deploying the site from Linux..."
    puts "The target path is: "+LINPATH+FOLDER

    #sh "jekyll --no-auto " + LINPATH + FOLDER
    rm_rf(LINPATH+FOLDER)
    cp_r("_site", LINPATH)
    mv(LINPATH+"/_site", LINPATH+FOLDER)

end

desc "Autodetect platform and deoploy (uses commit)"
task :deploy =>[:commit] do
    if(IS_WINDOWS)
        Rake::Task["windeploy"].execute
    else
        Rake::Task["lindeploy"].execute
    end
end

desc "Creates a new post in _posts directory"
task :new do
    puts "Enter post-title-like-this: "
    title = STDIN.gets.gsub(" ", "-").strip.downcase
    filename = ''+Time.new.strftime('%Y-%m-%d-')+title+".markdown"
    puts "Creating "+filename
    cp '_posts/template.markdown', '_posts/'+filename
    sh 'gvim ' + '_posts/'+filename
end

desc "Fixes footnote notation to conform to HTML5"
task :html5compliance, :dest do |t, args|
    puts "Running HTML5 Compliance task..."
    puts "Skipping, deprecated."

    # because OSX sed is stupid
    #sed = IS_MAC ? "gsed" : "sed"

    #dest = (args[:dest] == nil) ? "_site" : args[:dest]
    #files = FileList[dest+"/**/*.html"]

    #files.each do |f|
        # replace rel="footnote" with data-fn="footnote"
        # replace rel="reference" with data-fn="reference"
        #sh sed+" \"s/rel=\\\"footnote\\\"/data-fn=\\\"footnote\\\"/g\" -i " + f
        #sh sed+" \"s/rel=\\\"reference\\\"/data-fn=\\\"reference\\\"/g\" -i " + f

    #end
end

desc "Builds the site, ensures compliance and pushes it to github"
task :commit => [:build, :html5compliance] do
    puts "Running automated repository commit task..."

    sh "git add ."
    sh "git commit -a -m \"Auto-commited with Rake (" +Time.now.strftime("%Y-%m-%d")+ ")\""
    sh "git push"
end

desc "Build, ensure html5 compliance then lint"
task :default => [:build, :html5compliance, :lint]
