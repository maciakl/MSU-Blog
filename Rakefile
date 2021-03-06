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
  sh "rsync --version"
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


# NEW POST
desc "Creates a new post in _drafts directory"
task :new do

    puts "Enter year (default "+Time.new.strftime('%Y')+"):"
    year = STDIN.gets.strip!
    puts "Enter month (default "+Time.new.strftime('%m')+"):"
    month = STDIN.gets.strip!
    puts "Enter day (default "+Time.new.strftime('%d')+"):"
    day = STDIN.gets.strip!
    puts "Enter category (default: resource):"
    category = STDIN.gets.strip!
    if year.empty? then year = Time.new.strftime('%Y') end
    if month.empty? then month = Time.new.strftime('%m') end
    if day.empty? then day = Time.new.strftime('%d') end
    if category.empty? then category = 'resource' end

    puts "Enter post title:"
    title = STDIN.gets.strip!
    slug = title.gsub(" ", "-").strip.downcase
    filename = ''+year+'-'+month+'-'+day+'-'+slug+".markdown"

    puts "Creating "+filename
    contents = "---\n"
    contents += "layout: post\n"
    contents += "titke: "+title+"\n"
    contents += "category: "+category+"\n"
    contents += "---\n"
    File.open('_drafts/'+filename, 'w') {|f| f.write(contents) }
    sh 'gvim ' + '_drafts/'+filename
end

# PUBLSH DRAFTS
desc "Publishes the posts in the _drafts folder to _posts folder"
task :publish do

  Dir.foreach('_drafts') do |file|
    next if file == '.' or file == '..'
    puts 'Publish '+file+'? (Y/n)'
    y = STDIN.gets.strip!

    if y.casecmp("y") == 0 or y.empty?
      puts "Moving #{file} to _posts/"
      mv('_drafts/'+file, '_posts/'+file)
    end
  end
end

# RSYNC Ddeploy
desc "Incrementally deploy to the server."
task :deploy => [:build] do
  sh "rsync --compress --recursive --checksum --delete --itemize-changes _site/ maciakl@atum.dreamhost.com:~/iteach109.com/"
  sh "ssh maciakl@atum.dreamhost.com 'chmod -R 755 ~/iteach109.com'"
end

# Tunnel Deploy
desc "Deploy via a SSH tunnel (from work)"
task :tdeploy => [:build] do
  sh 'rsync --rsh="ssh -p 1234" --compress --recursive --checksum --delete --itemize-changes _site/* maciakl@localhost:~/iteach109.com/'
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
