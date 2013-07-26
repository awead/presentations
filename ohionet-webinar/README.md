# One of the Many Heads of Hydra
## At the Rock and Roll Hall of Fame

Date and Time
: Friday, August 9, 2013 2:00 p.m. EDT

Format
: Webinar hosted by OHIONET

### Description
Hydra is an open source repository solution that is becoming increasingly popular in Ohio. More than that, 
Hydra is a community for collaboration. Learn more about the instance (head) of Hydra that is growing at the 
Rock and Roll Hall of Fame + Museum Library and Archives. Adam Wead, Systems and Digital Collections Librarian 
for the Museum, will take us through the process he used to build the head, compare Hydra to other repository 
solutions, talk about modeling content, and discuss some of the requirements for adoption—all in just one hour
  
### Introduction

#### Hello, my name is
  * Adam Wead, Systems and Digital Collections Librarian at the Rock and Roll Hall of Fame and Museum
  * Hydra webinar in three parts:
    + Background: Digital asset managers and archiving
    + Technical Geekery: Hydra's technical components and what they're all about
    + Building a Hydra Head: Starting down the path to building your own head

#### Hydra at the Rockhall
  * We've been using Hydra for about 2 years now
  * Only video at the moment
    + 1650+ videos
    + 175 TB of data, mostly uncompressed video files stored on LTO tape, and not hard disk
    + PBCore metdata schema
    + compressed H264 files for streaming
    + records get exported to a discovery interface
  * Hydra works for us because it can satisfy all these needs in a way that other asset managers could not

### Part 1: Conceptual Background

##### What is Hydra?
  * Conceptual level:
    Community of software developers, end users, adopters and institutions focused on the managemement of digital content
  * Philosophy:
    If you want to go fast, go alone; if you want to go far, go together
  * Everyone is facing the same challenges with digital content, why no pool collective resources and build a solution
    that can leverage the work of other institutations and individuals who are meeting these shared challenges.

##### Current Hydra adopters and their solutions
  * Current partners
  * 

##### Challenges with digital media
  * a digital asset manager needs to do just that: manage our digital content that we want to ensure will be
    available in the comming years
  * what are the challenges that we'll face when doing that?
    + identifying content types: images, audio, text, pdf, video, etc.
    + description, i.e. metadata
    + storage and preservation
    + lifecycle: identify things that need to be deleted, kept or migrated to newer digital formats
    + format conversions such as creating derivative files
    + workflows for ingesting new content correctly, i.e. required information, supported formats
    + searching, updating, viewing your content 
    + controlling access

##### Archiving or just "managing" ?
  * archiving implies another set of features in addition to basic digital asset management features
  * heirarchichal organziation
  * accessioning of content
  * presentation of multiple items as a coherent unit, i.e. collections
  * an asset manager is generally item-level driven; archival information is collection-level driven
  * asset managers may use collections or groups of items, but these do no always correspond to what a
    collection means to an achivist or a collection withing an existing archives

##### What's out there now?
  * solutions exist today to address most of these problems
  * they aren't designed to work in concert with one another
  * they often aren't targeted towards librares or archives
  * solutions become a "stack" or combination of tools and procecudes grouped into a collective
    process that attempts to solve the asset management problem

##### Current landscape of asset management products
  * Proprietary
    + ContentDM (Innovative)
    + Rosetta (ExLibris)
    + Canto (favors text documents for businesses)
    + Piction (favors images for business, gov. and museums)
    + and many, many more
    + either built around existing ILS or focus on specific content+type
      
  * Opensoure (often using Fedora)
    + DSpace
    + Islandora
    + RODA (http://roda+community.org/)
    + many others ...

##### Asset Management Pitfalls
  * make assumptions about your content
    + modeling: organization of content, collections, rights management
    + type: A/V formats, file formats, data
    + metadata: Dublin Core, EAD, MARC, various xml schemas (PBCore, VRA, MODS)
  * your local implementation is limited to the constraints imposed by these assumptions
  * costs
    + money
    + technological resources
    + human resources

##### What's good about Hydra
  * makes no assumptions about your data (well, actually one assumption)
  * can model anything
  * using any metadata standard
  * using any content
  * stored anywhere
  * accessed by anyone or no one
  * presented as anything (using HTML and Javascript)
  * underlying technologies are abstracted (Fedora and Solr)
  * it's "free" and open-source

##### What's not-so-good about Hydra
  * technologically daunting -- you're going to be overwhelmed. that's okay.
  * deep "stack" of technologies
  * tied to the Ruby-on-Rails framwork
  * favors a Unix environment
  * requires in-house expertise/ability/willingness
  * not a turnkey solution (yet...)
  * no Hydra hosting options
    + you're required to provide your own hardware, but you can use hosted solutions for that

##### Why should I use it?
  * Decide for yourself...
  * Everything has costs
  * Every solution will require some technical expertise as well as some "jury rigging"
    + spending time getting the system running
    + learning
    + integrating with exsting systems: ILS, archival data, your databasases, your server systems and storage
  * Proprietary solutions don't work "out of the box" either
    + vendor may limit your ability to customize
  * Any open source solution will require modifications to meet your needs
    + open source products make assumptions about your content to reduce the amount of customization but there's the
      tradeoff of less operability
  * Avoiding "reinventing the wheel" - Hydra includes basic functionality at its core enabling the user to
    get started relatively quickly with a rich set of features
  * Can draw on a shared community of adopters and partners, each with their own technological resources
    + borrow and use other people's work and add it to your hydra head

### Part 2: Technology backstories

##### What is Hydra, technically?
  * A Ruby on Rails application
  * Built using the Blacklight and the Hydra gem
  * Fedora repository for creating and describing content
  * Solr for searching
  * Various other "Rails-isms" for additional features
    + User accounts
    + Authentication and authorization
    + MySQL database or other RDMS
    + JQuery javascript library for building an interface

##### A Brief History of Web Applications
  * content displayed in HTML, dynaically rendered
  * choose your own backend (i.e. a relational database)
    + Oracle
    + Microsoft SQL
    + MySQL
    + PostgreSQL
  * choose a software platform for for getting the backend out to the frontend
    + Perl/CGI
    + PHP
    + Microsoft ASP
    + Coldfusion
    + Java JSP
  * write your code and hope you never have to change
  * frontend solution is tied to the backend solution

##### Rails
  * Says: I don't care about any of that, just let me write a web application quickly
  * convention over configuration
  * data is modeled abstractly and it not tied to one particular database
  * enabling fast development

##### Fedora
  * problems with traditional RDMS
  * F is for Flexibility
  * speaks XML
  * built+in tools for persisting and storing data

##### Solr
  * short history
  * your own personal google
  * highly customizable

##### Blacklight

### Part 3: Buidling a Hydra Head

##### Requirements
  * at least 1 developer/sys. admin
    + ideally 2 people, one for dev one for admin
    + or if you already have an existing tech person, create a new dev role
  * a server with enough storage
    + everything can be on one machine, but load is a factor
    + high+demand applications will require additional hardware
    + rails/solr/fedora can each be separated out to different hardware environments as needed
  * hosting options
    + Amazon AWS
    + cloud storage with Fedora
    + hosted Rails applications
    
##### Learning
  * Ruby
  * Rails
  * Hydra

##### Buildind a "Head"
  * modeling content
  * choosing a metadata standard

##### Get Involved
  * committer's calls
  * partner meetings
  * irc chat room
  * hydra+tech email list
  * HydraCamp
