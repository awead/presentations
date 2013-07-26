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

##### Current Hydra adopters and their solutions
  * Current partners
  * 

##### What's in an asset manager?
  * identifies content types: images, audio, text, pdf, video, etc.
  * description: metadata
  * storage and preservation
  * lifecycle, helping you identify things that need to be deleted, kept or migrated to newer digital formats
  * workflows for ingesting new content
    + required descriptive fields
    + format conversions such as creating derivative files
  * searching, updating, viewing your content 
  * controlling access

##### Asset management versus archiving
  * archiving implies another set of features in addition to basic digital asset management features
  * heirarchichal organziation
  * accessioning of content
  * presentation of multiple items as a coherent unit, i.e. collections
  * an asset manager is usually item+level driven; archival information is collection driven
  * asset manager's may use collections or groups of items, but these do no always correspond to the achival notion of a collection or series

##### Current landscape of asset management solutions
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
  * Proprietary solutions still required technical expertise and modifications
    + vendor may limit your ability to customize
  * Open source solutions may require extensive modifications to meet your needs
  * Avoiding "reinventing the wheel"
  * Can draw on a shared community of adopters and partners, each with their own technological resources

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
