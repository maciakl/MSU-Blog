IS_WINDOWS = (RUBY_PLATFORM =~ /mingw/i) ? true : false

task :build do
    sh "jekyll --no-auto"
end

task :lint => [:build] do
    sh "grunt htmllint"
end

task :windeploy do
    sh "jekyll --no-auto x:/blog"
end

task :lindeploy do
    sh "jekyll --no-auto /remote/msuweb/blog"
end

task :deploy do
    if(IS_WINDOWS)
        Rake::Task["windeploy"].execute
    else
        Rake::Task["lindeploy"].execute
    end
end

task :default => [:build, :lint]

