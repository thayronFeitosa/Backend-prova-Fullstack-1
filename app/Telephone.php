<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Telephone extends Model
{
    public $timestamps = false;
    protected $fillable = ['number', 'user_id'];

    /**
     * returns the user that the telephone belongs to
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
