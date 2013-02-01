task :build do
    sh "jekyll --no-auto"
end

task :lint => [:build] do
    sh "grunt htmllint"
end

task :windeploy do
    sh "jekyll --noauto"
end

task :lindeploy do
    sh "jekyll --no-auto /remote/msuweb/blog"
end

task :default => [:build, :lint]

