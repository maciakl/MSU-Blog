IS_WINDOWS = (RUBY_PLATFORM =~ /mingw/i) ? true : false
WINPATH = "x:/blog"
LINPATH = "/remote/msuweb/blog"

task :build do
    sh "jekyll --no-auto"
end

task :lint => [:build, :html5compliance] do
    sh "grunt htmllint"
end

task :windeploy do
    sh "jekyll --no-auto " + WINPATH
end

task :lindeploy do
    sh "jekyll --no-auto " + LINPATH
end

task :deploy =>[:commit] do
    if(IS_WINDOWS)
        Rake::Task["windeploy"].execute
        Rake::Task["html5compliance"].invoke(WINPATH)
    else
        Rake::Task["lindeploy"].execute
        Rake::Task["html5compliance"].invoke(LINPATH)
    end
end

task :new do
    puts "Enter post-title-like-this: "
    title = STDIN.gets.gsub(" ", "-").strip.downcase
    filename = ''+Time.new.strftime('%Y-%m-%d-')+title+".markdown"
    puts "Creating "+filename
    cp '_posts/template.markdown', '_posts/'+filename
    sh 'gvim ' + '_posts/'+filename
end


task :html5compliance, :dest do |t, args|

    dest = (args[:dest] == nil) ? "_site" : args[:dest]
    puts "Starting build task for destination: " + dest
    files = FileList[dest+"/**/*.html"]

    files.each do |f|
        # replace rel="footnote" with data-fn="footnote"
        # replace rel="reference" with data-fn="reference"
        sh "sed \"s/rel=\\\"footnote\\\"/data-fn=\\\"footnote\\\"/g\" -i " + f
        sh "sed \"s/rel=\\\"reference\\\"/data-fn=\\\"reference\\\"/g\" -i " + f

    end
end

task :commit do

    sh "git add ."
    sh "git commit -a -m \"Commited with Rake (" +Time.now.strftime("%Y-%m-%d")+ ")\""
    sh "git push"
end

task :default => [:build, :html5compliance, :lint]

