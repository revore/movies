# Movie = Backbone.Model.extend
#   defaults:
#     name: ''
#     done: false

# MoviesCollection = Backbone.Collection.extend
#   model: Movie
#   url: '/i/docs/movies'
#   # localStorage: new Store('movies')

# MoviesCollection.prototype.create = (eat) ->
#   isDupe = @any (_eat) ->
#     _eat.get("name") is eat.name

#   console.log "isDupe", isDupe if logDebug
#   return false if isDupe
#   Backbone.Collection.prototype.create.call this, eat

# Movies = new MoviesCollection([])
# Movies.fetch
#   success: ->
#     console.log "fetch success" if logDebug
#     _.each names, (name) ->
#       console.log "create", name if logDebug
#       Movies.create({name})

# console.log "len", Movies.length if logDebug

# MovieView = Backbone.View.extend
#   tagName: 'li'
#   template: _.template( $('#eat-template').html() )
#   events:
#     'click': 'toggleDone'
#   render: ->
#     console.log "render" if logDebug
#     @$el.html( @template( @model.toJSON() ) )
#     state = if @model.get("done") && @model.get("done") then "done" else "todo"
#     $(@el).removeClass "done", "todo"
#     $(@el).addClass state
#     this
#   initialize: ->
#     @listenTo(@model, 'change', @render)
#   toggleDone: ->
#     return unless Juno.params.isOwner
#     console.log "toggle done", @model.get("done"), !@model.get("done") if logDebug
#     @model.save({done: !@model.get("done")})

# MoviesView = Backbone.View.extend
#   el: '#eats'
#   template: _.template( $('#eats-template').html() )
#   render: ->
#     console.log("lists view render") if logDebug
#     @$el.html( @template() )
#     this
#   initialize: ->
#     console.log("lists view initialize") if logDebug
#     @listenTo(Movies, 'reset', @addAll)
#     @listenTo(Movies, 'add', @redo)
#     @listenTo(Movies, 'remove', @redo)
#     @listenTo(Movies, 'create', @redo)
#     @redo()
#   redo: ->
#     @render()
#     @addAll()
#   addOne: (eat) ->
#     console.log("eat view add one", eat) if logDebug
#     view = new MovieView({ model: eat })
#     $('#eats-list').append( view.render().el )
#   addAll: ->
#     console.log("list view add all", Movies.length) if logDebug
#     @$('#eat-list').html('')
#     Movies.each(@addOne, this)

# new MoviesView()

# $("title").text("IMDB Top 250")
